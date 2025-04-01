"use client";
import { Ellipsis } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
type DataType = {
  id: string;
  orderItems: Array<object>;
  user: UserType;
  orderAddress: string;
  currentState: string;
  usersId: string;
  updatedAt: string;
  createdAt: string;
};
type UserType = {
  id: string;
  firstname: string;
  lastname: string;
};

export default function AdminTable() {
  const [Data, setData] = useState<Array<DataType>>();
  const [newDestination, setNewDestination] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const StatusValues = ["Delivered", "Pending", "In Transit", "Cancelled"];
  const [values, setValues] = useState("");
  const updateDeliveryStatus = async (id: string, status: string) => {
    try {
      setValues(id + status);
      const response = await fetch("../api/order/crudOrder", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          currentState: status,
        }),
      });
      await response.json();
    } catch (error) {
      console.error("Error updating delivery status:", error);
    }
  };
  console.log(values);
  const ChangeStatus = (status: string, id: string) => {
    updateDeliveryStatus(id, status);
  };
  const FetchData = async () => {
    const JSONdata = await fetch("../api/order/crudOrder", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const res = await JSONdata.json();
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
        currentState: "Pending",
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
    setData(res);
    if (res === undefined) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
    console.log(res);
  };
  useEffect(() => {
    FetchData();
  }, []);
  const ClickedDelete = async (id: string) => {
    const JSONdata = await fetch("../api/order/crudOrder", {
      method: "DELETE",
      body: JSON.stringify({
        id: id,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const res = JSONdata.json();
  };
  const HandleDestination = (e: { target: { value: string } }) => {
    setNewDestination(e.target.value);
  };
  return (
    <div>
      {isLoading ? (
        <div>
          <span>Aldaa</span>
        </div>
      ) : (
        <Table className="bg-white">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Data?.map((data) => (
              <TableRow key={data.id}>
                <TableCell>{data.id}</TableCell>
                <TableCell className="font-medium">
                  {data.user.firstname} {data.user.lastname}
                </TableCell>
                <TableCell>
                  <select
                    onChange={(e: { target: { value: string } }) =>
                      ChangeStatus(e.target.value, data.id)
                    }
                  >
                    {StatusValues.map((value, index) => (
                      <option key={index}>{value}</option>
                    ))}
                  </select>
                </TableCell>
                <TableCell>{data.orderAddress}</TableCell>
                <TableCell>{data.createdAt}</TableCell>
                <TableCell>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Ellipsis />
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <div className="grid grid-cols-3 items-center gap-4">
                            <Popover>
                              <PopoverTrigger asChild>
                                <span>Edit</span>
                              </PopoverTrigger>
                              <PopoverContent className="w-80">
                                <div className="grid gap-4">
                                  <div className="grid gap-2">
                                    <div className="flex">
                                      <Dialog>
                                        <DialogTrigger asChild>
                                          <span>Edit Destination</span>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px]">
                                          <DialogTitle>
                                            Please write new destination
                                          </DialogTitle>
                                          <div className="w-full">
                                            <input
                                              type="text"
                                              className="h-[30px] p-1 w-[300px]"
                                              onChange={HandleDestination}
                                              value={newDestination}
                                            />
                                            <div className="w-full flex justify-end">
                                              <DialogClose asChild>
                                                <button>Enter</button>
                                              </DialogClose>
                                            </div>
                                          </div>
                                        </DialogContent>
                                      </Dialog>
                                    </div>
                                  </div>
                                </div>
                              </PopoverContent>
                            </Popover>
                          </div>
                          <div className="grid grid-cols-3 items-center gap-4">
                            <Dialog>
                              <DialogTrigger asChild>
                                <span>Delete</span>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[425px]">
                                <DialogTitle>Are you sure?</DialogTitle>
                                <div className="w-full flex justify-around">
                                  <DialogClose asChild>
                                    <button
                                      onClick={() => ClickedDelete(data.id)}
                                    >
                                      Yes
                                    </button>
                                  </DialogClose>
                                  <DialogClose asChild>
                                    <button>No</button>
                                  </DialogClose>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
