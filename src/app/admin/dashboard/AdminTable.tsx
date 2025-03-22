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
  orderItems: Object;
  user: Object;
  orderAddress: String;
  currentState: String;
  usersId: String;
  updatedAt: Date;
  createdAt: Date;
};

export default function AdminTable() {
  const [fetchData, setFetchData] = useState<Array<DataType>>();
  const dateOfBirth = new Date(1990, 4, 7);
  console.log(dateOfBirth);
  const FetchData = async () => {
    const JSONdata = await fetch("", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await JSONdata.json();

    console.log(data);
    const mockData = [
      {
        usersId: "1",
        id: "1",
        user: { id: "1", firstname: "John", lastname: "Doe" },
        orderAddress: "123 Elm Street, Apartment 5B, Springfield",
        createdAt: 6,
        updatedAt: 6,
        currentState: "Delivered",
        orderItems: { id: 1 },
      },
    ];
    setFetchData(mockData);
  };

  const mockData = [
    {
      id: 1,
      customer: "John Doe",
      destination: "123 Elm Street, Apartment 5B, Springfield",
      date: "2025-03-18T12:30:00",
      status: "Delivered",
      items: [
        {
          item_name: "Cheeseburger",
          quantity: 1,
          price: 8.99,
        },
        {
          item_name: "Fries",
          quantity: 1,
          price: 2.99,
        },
      ],
    },
    {
      id: 2,
      customer: "Emily Smith",
      destination: "456 Oak Avenue, Suite 101, Springfield",
      date: "2025-03-18T13:15:00",
      status: "In Transit",
      items: [
        {
          item_name: "Pepperoni Pizza",
          quantity: 1,
          price: 12.99,
        },
        {
          item_name: "Garlic Bread",
          quantity: 1,
          price: 4.49,
        },
      ],
    },
    {
      id: 3,
      customer: "Michael Johnson",
      destination: "789 Maple Road, House 2, Springfield",
      date: "2025-03-18T14:00:00",
      status: "Pending",
      items: [
        {
          item_name: "Vegan Salad",
          quantity: 1,
          price: 7.49,
        },
        {
          item_name: "Smoothie",
          quantity: 1,
          price: 5.99,
        },
      ],
    },
    {
      id: 4,
      customer: "Sarah Brown",
      destination: "321 Pine Lane, Apartment 3A, Springfield",
      date: "2025-03-18T14:45:00",
      status: "Delivered",
      items: [
        {
          item_name: "Chicken Sandwich",
          quantity: 1,
          price: 9.49,
        },
        {
          item_name: "Onion Rings",
          quantity: 1,
          price: 3.99,
        },
      ],
    },
    {
      id: 5,
      customer: "David Lee",
      destination: "101 Birch Street, House 5, Springfield",
      date: "2025-03-18T15:30:00",
      status: "Cancelled",
      items: [
        {
          item_name: "Sushi Roll",
          quantity: 1,
          price: 11.99,
        },
      ],
    },
  ];
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div>
      <Table className="bg-white">
        <TableCaption>A list of your recent invoices.</TableCaption>
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
          {mockData.map((data) => (
            <TableRow key={data.id}>
              <TableCell>{data.id}</TableCell>
              <TableCell className="font-medium">{data.customer}</TableCell>
              <TableCell>{data.status}</TableCell>
              <TableCell>{data.destination}</TableCell>
              <TableCell>{data.items.length}</TableCell>
              <TableCell>{data.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
