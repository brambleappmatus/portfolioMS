export default function Pay() {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Payment Options</h1>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            For business inquiries, consulting services, or collaboration opportunities, please use one of the following payment methods:
          </p>
          
          <div className="space-y-4">
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Bank Transfer</h2>
              <p className="text-gray-600 dark:text-gray-300">Contact for bank details</p>
            </div>
            
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Digital Payments</h2>
              <p className="text-gray-600 dark:text-gray-300">Available upon request</p>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              For specific payment arrangements or questions, please reach out through the contact information provided.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}