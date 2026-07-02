export const services = [
  {
    slug: "gst-registration",
    code: "GST-01",
    name: "GST Registration",
    short: "Register your business under GST quickly and stay legally compliant.",
    description:
      "We handle end-to-end GST registration for proprietorships, partnerships, LLPs, private limited companies and OPCs — document preparation, ARN tracking and GSTIN issuance — so your business can start invoicing and claiming input tax credit without delay.",
    included: [
      "Eligibility check and document checklist",
      "Application filing on the GST portal",
      "ARN tracking and query resolution",
      "GSTIN certificate delivery"
    ]
  },
  {
    slug: "gst-return-filing",
    code: "GST-02",
    name: "GST Return Filing",
    short: "Timely and accurate filing of GST returns to avoid penalties and ensure smooth operations.",
    description:
      "From monthly GSTR-1 and GSTR-3B to annual returns, our team reconciles your sales and purchase data and files on time, every time, so you avoid late fees, interest and notices from the department.",
    included: [
      "GSTR-1, GSTR-3B and annual return filing",
      "Sales and purchase reconciliation",
      "Input tax credit review",
      "Filing reminders before every due date"
    ]
  },
  {
    slug: "tax-audit",
    code: "AUD-01",
    name: "Tax Audit",
    short: "Comprehensive tax audits conducted as per the Income Tax Act to ensure compliance and avoid legal issues.",
    description:
      "Our chartered accountants conduct tax audits under Section 44AB of the Income Tax Act, preparing the required forms and reports accurately so your business stays compliant and audit-ready.",
    included: [
      "Applicability assessment under Sec. 44AB",
      "Books of accounts review",
      "Form 3CA/3CB and 3CD preparation",
      "Timely filing before the due date"
    ]
  },
  {
    slug: "income-tax-return-filing",
    code: "ITR-01",
    name: "Income Tax Return (ITR) Filing",
    short: "File your personal or business income tax returns accurately and on time.",
    description:
      "Whether you're a salaried individual, a professional or a business owner, we prepare and file the correct ITR form, claim eligible deductions, and keep you compliant with the Income Tax Department.",
    included: [
      "Correct ITR form selection",
      "Deduction and exemption review",
      "Computation of tax payable or refund",
      "E-filing and acknowledgement"
    ]
  },
  {
    slug: "udyam-registration",
    code: "MSME-01",
    name: "Udyam Registration",
    short: "Register your business as an MSME to avail government benefits and schemes.",
    description:
      "We register your business under Udyam so you can access MSME benefits such as collateral-free loans, subsidies and priority sector lending, along with protection under the MSME Development Act.",
    included: [
      "Udyam application filing",
      "Classification as micro, small or medium",
      "Udyam Registration Certificate",
      "Guidance on applicable MSME schemes"
    ]
  },
  {
    slug: "income-tax-registration",
    code: "ITR-02",
    name: "Income Tax Registration",
    short: "Get PAN, TAN and other tax-related registrations with expert assistance.",
    description:
      "We assist individuals and businesses in obtaining PAN, TAN and other statutory tax registrations required to operate legally and deduct or remit tax correctly.",
    included: [
      "PAN application and corrections",
      "TAN application for deductors",
      "Document verification support",
      "Certificate delivery tracking"
    ]
  },
  {
    slug: "balance-sheet-preparation",
    code: "FIN-01",
    name: "Balance Sheet Preparation",
    short: "Professional preparation of balance sheets to reflect your company's financial position.",
    description:
      "We prepare accurate, standards-compliant balance sheets that give you and your stakeholders a clear picture of assets, liabilities and equity — ready for filings, loans or audits.",
    included: [
      "Ledger and trial balance review",
      "Balance sheet drafting",
      "Schedule and notes preparation",
      "Formats suitable for bank and audit use"
    ]
  },
  {
    slug: "profit-and-loss-account",
    code: "FIN-02",
    name: "Profit & Loss Account",
    short: "Detailed P&L statements to analyze business performance and profitability.",
    description:
      "We prepare detailed profit and loss statements that break down revenue, cost of goods and expenses, giving you the clarity to track profitability and plan ahead.",
    included: [
      "Income and expense classification",
      "Gross and net profit computation",
      "Comparative period analysis",
      "Reports ready for filing or review"
    ]
  },
  {
    slug: "tds-return-filing",
    code: "TDS-01",
    name: "TDS Return Filing",
    short: "Timely filing of TDS returns to ensure compliance with tax deduction regulations and avoid late fees.",
    description:
      "We prepare and file quarterly TDS returns (24Q, 26Q, 27Q), reconcile deductions with Form 26AS, and issue TDS certificates so you stay compliant with deduction and remittance rules.",
    included: [
      "Quarterly TDS return preparation",
      "Challan and deduction reconciliation",
      "Form 16/16A generation",
      "Correction return support"
    ]
  }
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);
