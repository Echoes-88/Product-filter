import { useEffect } from "react"

/**
 * Custom hook to handle component mount
 */
export const useMount = (mount: () => void) => useEffect(mount, []);