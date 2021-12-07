import NodeCache from "node-cache";

export const CacheManager = new NodeCache({ stdTTL: 3600 });
