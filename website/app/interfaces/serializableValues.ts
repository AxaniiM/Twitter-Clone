interface SerializableStateInvariantMiddlewareOptions {
    /**
     * The function to check if a value is considered serializable. This
     * function is applied recursively to every value contained in the
     * state. Defaults to `isPlain()`.
     */
    isSerializable?: (value: any) => boolean
    /**
     * The function that will be used to retrieve entries from each
     * value.  If unspecified, `Object.entries` will be used. Defaults
     * to `undefined`.
     */
    getEntries?: (value: any) => [string, any][]
  
    /**
     * An array of action types to ignore when checking for serializability.
     * Defaults to []
     */
    ignoredActions?: string[]
  
    /**
     * An array of dot-separated path strings or regular expressions to ignore
     * when checking for serializability, Defaults to
     * ['meta.arg', 'meta.baseQueryMeta']
     */
    ignoredActionPaths?: (string | RegExp)[]
  
    /**
     * An array of dot-separated path strings or regular expressions to ignore
     * when checking for serializability, Defaults to []
     */
    ignoredPaths?: (string | RegExp)[]
    /**
     * Execution time warning threshold. If the middleware takes longer
     * than `warnAfter` ms, a warning will be displayed in the console.
     * Defaults to 32ms.
     */
    warnAfter?: number
  
    /**
     * Opt out of checking state. When set to `true`, other state-related params will be ignored.
     */
    ignoreState?: boolean
  
    /**
     * Opt out of checking actions. When set to `true`, other action-related params will be ignored.
     */
    ignoreActions?: boolean
  }