"use client";

import InnerBanner from "@/components/global/inner-banner";
import React, { useState } from "react";
import { orderDocumentData } from "@/lib/data";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const OrderDocument = () => {
  const [radioValue, setRadioValue] = useState("1");
  return (
    <div>
      <InnerBanner text="Hujjat buyurtma berish" />
      <div className="container sm:pt-20 pt-14 pb-7">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8">
            <RadioGroup defaultValue={radioValue} onValueChange={setRadioValue}>
              {orderDocumentData.map((document) => (
                <div
                  key={document.id}
                  className="flex gap-2 items-center cursor-pointer group"
                >
                  <RadioGroupItem
                    value={String(document.id)}
                    id={String(document.id)}
                    className="text-primary-main group-hover:text-primary-main checked:border-primary-main"
                  />
                  <label
                    htmlFor={String(document.id)}
                    className="group-hover:text-primary-main cursor-pointer transition duration-300"
                  >
                    {document.name}
                  </label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="col-span-4"></div>
        </div>
      </div>
    </div>
  );
};

export default OrderDocument;
