"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [backendStatus, setBackendStatus] = useState("proveravam...");

  useEffect(() => {
    // Proveri backend status
    fetch("http://localhost:3001/api/health")
      .then((res) => res.json())
      .then((data) => setBackendStatus("✅ " + data.message))
      .catch((err) => setBackendStatus("❌ Backend nije dostupan"));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            🏭 ERP Proizvodnja
          </h1>
          <p className="text-gray-600 mb-4">
            Sistem za upravljanje proizvodnjom
          </p>

          <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
            <p className="text-sm text-gray-700">{backendStatus}</p>
          </div>

          <div className="space-y-4">
            <a
              href="/demo"
              className="block w-full bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors text-center"
            >
              🚀 Demo Tenant
            </a>
            <a
              href="/tenant1"
              className="block w-full bg-gray-500 text-white px-4 py-3 rounded-lg hover:bg-gray-600 transition-colors text-center"
            >
              🔧 Tenant 1
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
