enum CacheType {
  Local,
  Session,
}

class Cache {
  storage!: Storage;

  constructor(type: CacheType) {
    this.storage = type === CacheType.Local ? localStorage : sessionStorage;
  }

  set(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  get(key: string) {
    const value = this.storage.getItem(key);
    console.log(value);
    if (value) return JSON.parse(value);
    else return "";
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}

export const localCache = new Cache(CacheType.Local);
export const sessionCache = new Cache(CacheType.Session);
