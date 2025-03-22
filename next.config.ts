import type { NextConfig } from "next";

const nextConfig: NextConfig = {
experimental:{
    allowedDevOrigins: ["*"],
},
typescript:{
    ignoreBuildErrors:true
}
};

export default nextConfig;
