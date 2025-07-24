"use client";

import React, { useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import Link from "next/link";
import { updateDefaultAccount } from "@/actions/accounts";
import { toast } from "sonner";
import useFetch from "@/hooks/use-fetch";



const AccountCard = ({ account }) => {
  const { name, type, balance, id, isDefault } = account;

  const {
    loading: updateDefaultLoading,
    fn: updateDefaultFn,
    data: updateAccount,
    error,
} = useFetch(updateDefaultAccount);


const handleDefaultChange = async(event)=>{
event.preventDefault();
if(isDefault) {
    toast.warning("you need atleast one default account");
    return;
}
await updateDefaultFn(id);
};

useEffect(() => {
if (updateAccount?.sucess){
    toast.success ("Default account updated sucessfully");
}
}, [updateAccount]);

useEffect(() => {
if (error){
    toast.error (error.message || "Failed to update default account");
}
}, [error]);


  return (
    <Card className="hover:shadow-md transition-shadow group relative">
        <Link href = {`/account/${id}}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium capitalize">
            {name}
            </CardTitle>
        <Switch 
        checked = {isDefault}
         onClick={handleDefaultChange}
        disabled={updateDefaultLoading}
        />
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
      <div className="text-2xl font-bold">
        ${parseFloat(balance).toFixed(2)}
        </div>
        <p className= "text-xs text-muted-foreground capitalize">
            {type.charAt(0) + type.slice(1).toLowerCase()}Account
            </p>
      </CardContent>
      <CardFooter className="flex justify-between text-sm text-muted-foreground">
       <div className="flex items-center">
        <ArrowUpRight className="me-1 h-4 w-4 text-green-500"/>
       Income
       </div >
       <div className="flex items-center">
          <ArrowDownRight className="me-1 h-4 w-4 text-green-500"/>
       Expense
       </div >
       
      </CardFooter>
      </Link>
    </Card>
  );
};

export default AccountCard;
      
