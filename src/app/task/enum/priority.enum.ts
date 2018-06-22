export enum Priority {
  low = '#5cb85c',
  normal = '#f0ad4e',
  high = '#d9534f',
}

export namespace Priority {
  export function values() {
    return Object.keys(Priority)
      .map(k => Priority[k])
      .filter(v => typeof v === 'string') as string[];
  }
}
