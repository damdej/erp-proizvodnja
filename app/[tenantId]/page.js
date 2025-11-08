export default function TenantPage({ params }) {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                    href={`/${params.tenantId}/work-orders`}
                    className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
                >
                    <h2 className="text-xl font-semibold mb-2">📋 Radni Nalozi</h2>
                    <p className="text-gray-600">Upravljanje radnim nalozi ma i proizvodnjom</p>
                </a>

                <a
                    href={`/${params.tenantId}/shift-reports`}
                    className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
                >
                    <h2 className="text-xl font-semibold mb-2">📊 Smenski Izveštaji</h2>
                    <p className="text-gray-600">Pregled i unos smenskih izveštaja</p>
                </a>

                <a
                    href={`/${params.tenantId}/machines`}
                    className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
                >
                    <h2 className="text-xl font-semibold mb-2">⚙️ Mašine</h2>
                    <p className="text-gray-600">Upravljanje mašinama i opremom</p>
                </a>
            </div>
        </div>
    );
}