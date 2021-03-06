import React from "react"

export enum Pages {
    EntryMenu,
    MainMenu,
    Hives,
    ViewHives,
    Treatments,
    ViewTreatments,
    AddHives,
    SingleHive,
    RemoveHive,
    HiveAddedCorrectly,
    AddTreatments,
    TreatmentAddedCorrectly,
}

export type Hive = {
    hive: number,
    registerDate: Date,
}

export type Treatment = {
    hive: number,
    registerDate: Date,
    title: string,
    description: string,
}

export interface PageProps {
    setCurrentPage: React.Dispatch<React.SetStateAction<Pages>>;
    setHistory: React.Dispatch<React.SetStateAction<Pages[]>>;
}