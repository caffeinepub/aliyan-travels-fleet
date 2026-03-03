import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Application {
    name: string;
    address: string;
    timestamp: bigint;
    phone: string;
}
export interface backendInterface {
    getApplications(): Promise<Array<Application>>;
    submitApplication(name: string, phone: string, address: string): Promise<string>;
}
