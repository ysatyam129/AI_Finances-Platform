"use server";

// import aj from "@/lib/arcjet";
import { db } from "@/lib/prisma";
// import { request } from "@arcjet/next";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

const serializetransaction = (obj) => {
    const serialized = {...obj };
    if(obj.balance){
        serialized.balance =obj.balance.toNumber();
    }
    if(obj.amount){
        serialized.amount =obj.amount.toNumber();
    }
  return serialized;  
};

export async function createAccount(data){
try{
const {userId} = await auth();
if(!userId) throw new Error("Unauthorized");
const user = await db.user.findUnique(
    {
        where: {clerkUserId: userId},
    }
);
if(!user){
    throw new Error("User not found");
}
//convert bal float before saving
const balanceFloat = parseFloat(data.balance)
if(isNaN(balanceFloat)){
    throw new Error("Invalid balance amount");
}
const existingAccounts = await db.account.findMany({
    where : {userId: user.id},
    
});
console.log(existingAccounts);

const shouldBeDefault = existingAccounts.length==0 ? true : data.isDefault;
if(shouldBeDefault){
    await db.account.updateMany({
        where:{userId:user.id, isDefault:true},
        data: {isDefault:false},
    });
}
const account = await db.account.create({
    data:{
        ...data,
        balance:balanceFloat,
        userId:user.id,
        isDefault:shouldBeDefault,

    },
});
const serializedAccount  = serializetransaction(account);
revalidatePath("/dashboard");
return { sucess:true, data: serializedAccount };
}
catch (error){
    throw new Error(error.message);
}
}


export async function getuserAccounts()
{
   const {userId} = await auth();
if(!userId) throw new Error("Unauthorized");
const user = await db.user.findUnique(
    {
        where: {clerkUserId: userId},
    }
);
if(!user){
    throw new Error("User not found");
}
   const accounts = await db.account.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      include: {
        _count: {
          select: {
            transactions: true,
          },
        },
      },
    });

const serializedAccounts  = accounts.map(serializetransaction);
return serializedAccounts;
}


