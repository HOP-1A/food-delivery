"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
type DataType = {
  id: string;
  orderItems: Array<object>;
  user: UserType;
  orderAddress: String;
  currentState: String;
  usersId: String;
  updatedAt: String;
  createdAt: String;
};
type UserType = {
  id: string;
  firstname: string;
  lastname: string;
};

export default function AdminTable() {
  const [Data, setData] = useState<Array<DataType>>();
  const FetchData = async () => {
    const JSONdata = await fetch("api/order/crudOrder", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await JSONdata.json();
    const mockData = [
      {
        usersId: "1",
        id: "1",
        user: { id: "1", firstname: "John", lastname: "Doe" },
        orderAddress: "123 Elm Street, Apartment 5B, Springfield",
        createdAt: "2025-03-18T12:30:00",
        updatedAt: "2025-03-18T12:30:00",
        currentState: "Delivered",
        orderItems: [{ id: 1 }],
      },
      {
        usersId: "1",
        id: "2",
        user: { id: "1", firstname: "John", lastname: "Doe" },
        orderAddress: "123 Elm Street, Apartment 5B, Springfield",
        createdAt: "2025-03-18T12:30:00",
        updatedAt: "2025-03-18T12:30:00",
        currentState: "Delivered",
        orderItems: [{ id: 1 }],
      },
      {
        usersId: "1",
        id: "3",
        user: { id: "1", firstname: "John", lastname: "Doe" },
        orderAddress: "123 Elm Street, Apartment 5B, Springfield",
        createdAt: "2025-03-18T12:30:00",
        updatedAt: "2025-03-18T12:30:00",
        currentState: "Delivered",
        orderItems: [{ id: 1 }],
      },
      {
        usersId: "1",
        id: "4",
        user: { id: "1", firstname: "John", lastname: "Doe" },
        orderAddress: "123 Elm Street, Apartment 5B, Springfield",
        createdAt: "2025-03-18T12:30:00",
        updatedAt: "2025-03-18T12:30:00",
        currentState: "Delivered",
        orderItems: [{ id: 1 }],
      },
    ];
    setData(mockData);
    console.log(Data);
  };
  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div>
      <Table className="bg-white">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Destination</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Data?.map((data) => (
            <TableRow key={data.id}>
              <TableCell>{data.id}</TableCell>
              <TableCell className="font-medium">
                {data.user.firstname} {data.user.lastname}
              </TableCell>
              <TableCell>{data.currentState}</TableCell>
              <TableCell>{data.orderAddress}</TableCell>
              <TableCell>{data.orderItems.length}</TableCell>
              <TableCell>{data.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
