import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    city: string;
    name: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export type Time = bigint;
export interface backendInterface {
    getInquiries(): Promise<Array<Inquiry>>;
    submitInquiry(name: string, phone: string, city: string, message: string): Promise<void>;
}
