import LegalPage, { LegalSection } from "../components/layout/LegalPage";
import { business } from "../data/business";

export default function PrivacyPolicy() {
  return (
    <LegalPage
      path="/privacy-policy"
      eyebrow="Legal"
      title="Privacy Policy"
      description="Privacy Policy of BMTAX INDIA (OPC) PRIVATE LIMITED — ensuring the privacy and security of our users' data."
      effectiveDate="January 19, 2025"
    >
      <LegalSection heading="Introduction">
        <p>
          At {business.legalName}, accessible from bmtaxopc.com, one of our main priorities is
          the privacy of our visitors. This Privacy Policy document contains the types of
          information collected and recorded by {business.legalName} and how we use and protect
          it.
        </p>
        <p>
          This Privacy Policy applies only to our online activities and is valid for visitors to
          our website with regards to the information that they share and/or collect in{" "}
          {business.legalName}. This policy does not apply to any information collected offline
          or via channels other than this website.
        </p>
      </LegalSection>

      <LegalSection heading="Consent">
        <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
      </LegalSection>

      <LegalSection heading="Information We Collect">
        <p>
          The personal information that you are asked to provide, and the reasons why you are
          asked to provide it, will be made clear to you at the point we ask you to provide your
          personal information. We collect the following information:
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            <strong>Contact information:</strong> name, email address, phone number and other
            details to provide tax and legal compliance services.
          </li>
          <li>
            <strong>Account information:</strong> information collected during registration or
            inquiries, such as your business details, address and contact preferences.
          </li>
          <li>
            <strong>Message content:</strong> if you contact us directly, we may receive
            additional information such as the contents of your message and any attachments you
            may send.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="How We Use Your Information">
        <p>We use the information we collect in various ways, including to:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Provide, operate and maintain our website and services.</li>
          <li>Improve, personalize and expand our offerings.</li>
          <li>Understand and analyze how you use our platform.</li>
          <li>Develop new products, services and features.</li>
          <li>Communicate with you for customer support and updates.</li>
          <li>Send you promotional emails and notifications.</li>
          <li>Detect and prevent fraudulent activities.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Log Files">
        <p>
          {business.legalName} follows a standard procedure of using log files. These files log
          visitors when they visit the website. The information collected includes IP addresses,
          browser type, ISP, date and time stamps, referring/exit pages and click data. This data
          is not linked to personally identifiable information and is used for analyzing trends
          and site administration.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies and Web Beacons">
        <p>
          Like other websites, {business.legalName} uses cookies to enhance user experience.
          Cookies store information about visitor preferences and accessed pages. This helps
          optimize the website based on visitors&apos; browser types and other information.
        </p>
      </LegalSection>

      <LegalSection heading="Third-Party Privacy Policies">
        <p>
          {business.legalName}&apos;s Privacy Policy does not apply to other websites or
          advertisers. We recommend consulting their privacy policies for more information on
          their practices.
        </p>
      </LegalSection>

      <LegalSection heading="CCPA Privacy Rights">
        <p>California consumers have the right to:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Request disclosure of the data categories and specific pieces collected.</li>
          <li>Request deletion of personal data.</li>
          <li>Opt out of the sale of personal data.</li>
        </ul>
        <p>If you make a request, we have one month to respond. Contact us to exercise these rights.</p>
      </LegalSection>

      <LegalSection heading="GDPR Data Protection Rights">
        <p>We ensure you are aware of your data protection rights:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li><strong>Access:</strong> request copies of your data.</li>
          <li><strong>Rectification:</strong> request corrections to inaccurate data.</li>
          <li><strong>Erasure:</strong> request deletion of your data under certain conditions.</li>
          <li><strong>Restriction:</strong> request restriction of data processing.</li>
          <li><strong>Objection:</strong> object to data processing.</li>
          <li><strong>Portability:</strong> request transfer of your data to another organization.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Children's Information">
        <p>
          {business.legalName} does not knowingly collect personal identifiable information from
          children under 13. If you believe your child has provided such information, contact us
          immediately, and we will promptly remove it from our records.
        </p>
      </LegalSection>

      <LegalSection heading="Contact Information">
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Email: {business.email}</li>
          <li>Phone: {business.phone}</li>
          <li>Address: {business.address.full}</li>
        </ul>
      </LegalSection>
    </LegalPage>
  );
}
