/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http", // Используйте http, если ссылка начинается с http
                hostname: "3-gymnasium.kg",
                port: "",
                pathname: "/media/images/**", // Убедитесь, что путь соответствует вашим изображениям
            },
            {
                protocol: "https",
                hostname: "gimnasium.onrender.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "vermojctkdkrdsxvauwc.supabase.co",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "api.dicebear.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
