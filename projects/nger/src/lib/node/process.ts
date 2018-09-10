import { Injectable } from "@angular/core";
@Injectable()
export abstract class Process {
    stdout: NodeJS.WriteStream;
    stderr: NodeJS.WriteStream;
    stdin: NodeJS.ReadStream;
    env: NodeJS.ProcessEnv;
    argv: string[];
    argv0: string;
    pid: number;
    title: string;
    arch: string;
    connected: boolean;
    abstract cwd(): string;
    abstract exit(code?: number): never;
    abstract kill(pid: number, signal?: string | number): void;
    abstract cpuUsage(previousValue?: NodeJS.CpuUsage): NodeJS.CpuUsage;
    abstract nextTick(callback: Function, ...args: any[]): void;
    abstract send(message: any, sendHandle?: any): void;
    abstract disconnect(): void;
    abstract memoryUsage(): NodeJS.MemoryUsage;
}
@Injectable()
export class ProcessImpl extends Process {
    constructor() {
        super();
        this.stdout = process.stdout;
        this.stderr = process.stderr;
        this.stdin = process.stdin;
        this.env = process.env;
        this.argv = process.argv;
        this.argv0 = process.argv0;
        this.pid = process.pid;
        this.title = process.title;
        this.arch = process.arch;
        this.connected = process.connected;
    }
    cwd(): string {
        return process.cwd();
    }
    exit(code?: number): never {
        return process.exit(code);
    }
    kill(pid: number, signal?: string | number): void {
        return process.kill(pid, signal);
    }
    cpuUsage(previousValue?: NodeJS.CpuUsage): NodeJS.CpuUsage {
        return process.cpuUsage(previousValue);
    }
    nextTick(callback: Function, ...args: any[]): void {
        return process.nextTick(callback, ...args);
    }
    send(message: any, sendHandle?: any): void {
        return process.send(message, sendHandle);
    }
    disconnect(): void {
        return process.disconnect();
    }
    memoryUsage(): NodeJS.MemoryUsage {
        return process.memoryUsage();
    }
}
