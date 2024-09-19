"use client";
import { useGetOlympiansQuery } from "@/redux/api/olympians";
import React from "react";

const OlympaidsSelection = () => {
    const { data, isError, isLoading } = useGetOlympiansQuery() || undefined;

    console.log(data);

    return (
        <>
            <div className="container">
                <h1>{data?.map((item) => item.id)} </h1>
            </div>
        </>
    );
};

export default OlympaidsSelection;
