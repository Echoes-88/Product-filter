import { useEffect } from "react"

export const useMount = (mount: any) => useEffect(mount, []);