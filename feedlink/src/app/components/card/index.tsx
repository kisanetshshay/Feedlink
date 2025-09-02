export default function CardSection() {
    return (
      <section className="bg-green-50 py-8 px-8 text-center">
        <h3 className="text-2xl font-semibold mb-5">Creating Values</h3>
        <div className="flex flex-col gap-5 md:flex-row md:justify-center md:gap-10">
          <div className="bg-white rounded-lg shadow p-6 w-full max-w-xs mx-auto">
            <strong className="text-green-900 block mb-2">Environmental</strong>
            <p className="text-gray-700 text-sm">Reducing landfill waste, saving resources</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 w-full max-w-xs mx-auto">
            <strong className="text-green-900 block mb-2">Social</strong>
            <p className="text-gray-700 text-sm">Providing food for communities in need</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 w-full max-w-xs mx-auto">
            <strong className="text-green-900 block mb-2">Economic</strong>
            <p className="text-gray-700 text-sm">Empowering local partners and reducing costs</p>
          </div>
        </div>
      </section>
    );
  }