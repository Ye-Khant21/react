import html2pdf from "html2pdf.js";
import printJS from "print-js";
import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const VoucherCard = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + "/vouchers/" + id,
    fetcher
  );

  const handlePrint = () => {
    printJS({
      printable: "printArea",
      type: "html",
      scanStyles: true,
      css: ["https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"],
    });
  };

  const handlePdf = () => {
    const element = document.getElementById("printArea");

    const opt = {
      margin: 0.5,
      filename: "invoice.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a5", orientation: "portrait" },
    };

    html2pdf().from(element).set(opt).save();
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Failed to load invoice.</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      
      {/* FORM - A5 size */}
      <div
        id="printArea"
        className="w-[14.8cm] max-w-full bg-white p-6 shadow-lg rounded-md"
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-1">INVOICE</h1>
            <p className="text-base">{data.voucher_id}</p>
          </div>
          <div className="text-right text-sm">
            <p className="font-semibold">Invoice to</p>
            <p>{data.customer_name}</p>
            <p>Date: {new Date(data.sale_date).toLocaleDateString()}</p>
          </div>
        </div>

        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-gray-400">
              <th className="text-left py-1">No</th>
              <th className="text-left py-1">Description</th>
              <th className="text-right py-1">Qty</th>
              <th className="text-right py-1">Price</th>
              <th className="text-right py-1">Total</th>
            </tr>
          </thead>
          <tbody>
            {data.records.map((record, index) => (
              <tr key={record.id} className="border-b border-gray-200">
                <td className="py-1">{index + 1}</td>
                <td className="py-1">{record.product.product_name}</td>
                <td className="py-1 text-right">{record.quantity}</td>
                <td className="py-1 text-right">{record.product.price}</td>
                <td className="py-1 text-right">{record.cost}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" className="text-right pt-2">Total</td>
              <td className="text-right">{data.total.toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan="4" className="text-right pt-1">Tax</td>
              <td className="text-right">{data.tax.toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan="4" className="text-right font-bold pt-1">Net Total</td>
              <td className="text-right font-bold">{data.netTotal.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>

        <div className="text-xs mb-6">
          <div className="mb-2">
            <h2 className="font-bold mb-1">Payment Transfer to</h2>
            <p>Kpay, Wave - 09250152018</p>
            <p>KBZ Bank - 02730102705025601</p>
            <p>AYA Bank - 20003674121</p>
          </div>
          <div>
            <h2 className="font-bold text-base">MMS IT</h2>
            <p>48, 1st Floor, Shan Kone St.</p>
            <p>+959-250-152-018</p>
            <p>enquiry@mms-it.com</p>
          </div>
        </div>

        <div className="border-t pt-3 text-center text-sm">
          <p>Thanks to You</p>
        </div>
      </div>

      {/* BUTTONS - below form, not printed */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center w-full max-w-[14.8cm] print:hidden">
        <button
          onClick={handlePrint}
          className="bg-blue-700 hover:bg-blue-800 text-white text-sm px-4 py-2 rounded-md w-full sm:w-auto"
        >
          Print Voucher
        </button>
        <button
          onClick={handlePdf}
          className="bg-blue-700 hover:bg-blue-800 text-white text-sm px-4 py-2 rounded-md w-full sm:w-auto"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default VoucherCard;
