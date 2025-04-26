export class LocalStorage {
  private static instance: LocalStorage;
  private storage: Storage;

  private constructor() {
    this.storage = window.localStorage;
  }

  public static getInstance(): LocalStorage {
    if (!LocalStorage.instance) {
      LocalStorage.instance = new LocalStorage();
    }
    return LocalStorage.instance;
  }

  public setItem(key: string, value: Record<string, any>): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  public getItem<T>(key: string): T | null {
    const item = this.storage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  public removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  public clear(): void {
    this.storage.clear();
  }

  public setArrayItem(key: string, value: any[]): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  public getArrayItemById<T extends { id: string | number }>(key: string, id: string): T | null {
    const item = this.getArrayItem<T>(key);
    if (!item) {
      return null;
    }
    return item.find((i: T) => i.id === id) || null;
  }

  public pushArrayItem(key: string, value: any): void {
    const existingArray = this.getItem<any[]>(key) || [];
    existingArray.push(value);
    this.setArrayItem(key, existingArray);
  }

  public getArrayItem<T>(key: string): T[] {
    const item = this.storage.getItem(key);
    return item ? JSON.parse(item) : [];
  }

  removeArrayItemById<T extends { id: string | number }>(progresses: string, id: string) {
    const items = this.getArrayItem<T>(progresses);
    const updatedItems = items.filter((item: T) => item.id !== id);
    this.setArrayItem(progresses, updatedItems);
  }
}
