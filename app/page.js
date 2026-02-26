export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* Header */}
      <header className="p-6 border-b">
        <h1 className="text-2xl font-bold">Apefiy</h1>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">
          Modern Android App Development
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          We build lightweight, modern and Google Play compliant Android
          applications designed for performance and simplicity.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16 px-6">
        <h3 className="text-3xl font-semibold text-center mb-10">
          Our Services
        </h3>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          <div className="p-6 bg-white rounded-xl shadow">
            <h4 className="font-bold mb-2">App Development</h4>
            <p>Custom Android apps built with modern UI and optimized performance.</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <h4 className="font-bold mb-2">UI/UX Design</h4>
            <p>Minimal and professional interfaces focused on usability.</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <h4 className="font-bold mb-2">Play Store Publishing</h4>
            <p>Complete support for Play Store launch and policy compliance.</p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-6 border-t">
        <p>© {new Date().getFullYear()} Apefiy. All rights reserved.</p>
      </footer>

    </main>
  );
}