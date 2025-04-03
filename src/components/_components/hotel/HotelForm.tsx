"use client"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UploadThing from "../UploadThing";

export const formSchema = z.object({
  title: z.string().min(1, { message: "Title cannot be empty!" }),
  description: z.string().min(5, { message: "Description should be a long string!" }),
  image: z.string().min(1, { message: "Please upload image!" }),
  country: z.string().min(1, { message: "Please select country." }),
  state: z.string().optional(),
  city: z.string().optional(),
  locationDescription: z.string().min(5, { message: "Location description should be a long string!" }),
  gym: z.boolean().optional(),
  spa: z.boolean().optional(),
  bar: z.boolean().optional(),
  laundry: z.boolean().optional(),
  restaurant: z.boolean().optional(),
  shopping: z.boolean().optional(),
  freeParking: z.boolean().optional(),
  bikeRental: z.boolean().optional(),
  wifi: z.boolean().optional(),
  movieNights: z.boolean().optional(),
  swimmingPool: z.boolean().optional(),
  coffeeShop: z.boolean().optional(),
  rooms: z.boolean().optional(),
  bookings: z.boolean().optional(),
});

export default function HotelForm({hotel}) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
      country: "",
      state: "",
      city: "",
      locationDescription: "",
      gym: false,
      spa: false,
      bar: false,
      laundry: false,
      restaurant: false,
      shopping: false,
      freeParking: false,
      bikeRental: false,
      wifi: false,
      movieNights: false,
      swimmingPool: false,
      coffeeShop: false,
      rooms: false,
      bookings: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("formData:", values);
  }
  return (
    <div className="w-full min-h-screen flex items-center justify-center">        
      <Card className="max-w-6xl w-full p-6 shadow-lg border border-gray-200">
        <CardHeader>
          <CardTitle className="font-bold text-center text-2xl">Hotel Registration Form</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-2xl">Hotel Name</FormLabel>
                    <FormControl>
                      <Input className="text-2xl" placeholder="Enter hotel name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
  
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-2xl">Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe your hotel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
  
              <div className="grid grid-cols-2 gap-4">
                {Object.keys(form.getValues()).slice(7).map((key, index) => (
                  <FormField
                    key={index}
                    control={form.control}
                    name={key}
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-3">
                        <Checkbox checked={field.value || false} onCheckedChange={field.onChange} />
                        <FormLabel className="text-xl">{key.replace(/([A-Z])/g, " $1").trim()}</FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
                <UploadThing />
              <Button type="submit" className="w-full">Submit</Button>
            </form>
          </Form>
        </CardContent>

      </Card>
    </div>
  );
  
}
