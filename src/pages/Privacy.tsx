import PageContainer from "@/components/layout/PageContainer";
import SEO from "@/components/shared/SEO";
import { siteUrl } from "@/config/site";

export default function Privacy() {
  return (
    <PageContainer plain>
      <SEO
        title="Privacy Policy"
        description="KWT Privacy Policy. Learn how we collect, use, and protect your personal information."
        url={siteUrl("/privacy")}
      />

      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24 lg:px-8">

        {/* ── Page header ───────────────────────────────────────────────── */}
        <header className="border-b border-hairline pb-10">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="display">Privacy Policy</h1>
          <p className="mt-4 text-sm text-[var(--color-secondary)]">
            Last updated:{" "}
            <time dateTime="2026-08-28">August 28, 2026</time>
          </p>
        </header>

        {/* ── Document body ─────────────────────────────────────────────── */}
        <div className="prose-kwt mt-10">

          <p>
            Kashmiri Women in Tech ("KWT", "we", "us", or "our") respects your privacy
            and is committed to handling your personal information responsibly. This
            Privacy Policy describes how we collect, use, share, and protect your
            information when you visit our website, join our community, register for
            events, volunteer, or subscribe to our communications.
          </p>
          <p>
            By using the KWT website or submitting information through our forms, you
            agree to the practices described in this policy. If you do not agree, please
            do not use the website or submit personal information to us.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            Depending on how you interact with KWT, we may collect information such as:
          </p>
          <ul>
            <li>
              <strong>Membership information:</strong> name, email address, LinkedIn
              profile, education or professional information, technology interests, and
              other information you choose to provide when joining KWT.
            </li>
            <li>
              <strong>Volunteer information:</strong> name, email address, skills,
              interests, availability, and other information submitted through volunteer
              forms.
            </li>
            <li>
              <strong>Event registration information:</strong> name, email address,
              professional or community information, and other information requested for a
              particular event.
            </li>
            <li>
              <strong>Newsletter information:</strong> email address and any other
              information voluntarily provided when subscribing to KWT communications.
            </li>
            <li>
              <strong>Communications:</strong> information you provide when contacting us
              directly.
            </li>
          </ul>
          <p>
            Please do not submit sensitive personal information through KWT forms unless it
            is specifically requested and necessary for the stated purpose.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information you provide to:</p>
          <ul>
            <li>Process and manage KWT membership applications.</li>
            <li>Communicate with community members.</li>
            <li>Organize and manage events and registrations.</li>
            <li>Coordinate volunteer activities.</li>
            <li>
              Send newsletters, announcements, and community updates when you have
              requested or subscribed to them.
            </li>
            <li>Respond to questions and requests.</li>
            <li>Improve the KWT website, community activities, and services.</li>
            <li>
              Maintain the security and proper functioning of our website and forms.
            </li>
            <li>Comply with applicable legal obligations.</li>
          </ul>
          <p>
            We aim to collect and use personal information only for purposes that are
            relevant to the interaction in which you provide it.
          </p>

          <h2>3. Forms and Third-Party Services</h2>
          <p>
            KWT may use third-party services, including <strong>Tally</strong>, to collect
            information submitted through membership, volunteer, event-registration,
            newsletter, or other forms.
          </p>
          <p>
            When you submit information through a third-party form, that information may be
            processed and stored by the third-party service according to its own privacy
            practices and terms.
          </p>
          <p>
            We recommend reviewing the privacy policy of any third-party service before
            submitting personal information through its forms.
          </p>
          <p>
            KWT does not claim ownership or control over the privacy practices of
            third-party services.
          </p>

          <h2>4. Newsletter and Communications</h2>
          <p>
           If you subscribe to KWT newsletters or communications, we may use the information you provide to send you community updates, event announcements, opportunities, and other information related to KWT.

You may request to stop receiving KWT communications at any time by contacting us at kashmiriwomenintech@gmail.com.

We will process such requests within a reasonable timeframe.
          </p>
          {/* <p>
            You may request to stop receiving such communications at any time by using the
            available unsubscribe mechanism or by contacting us.
          </p> */}

          <h2>5. How We Share Information</h2>
          <p>We do not intend to sell or rent your personal information.</p>
          <p>
            We may share information with service providers that help us operate KWT, such
            as form, communication, hosting, or website-service providers, where necessary
            to provide the relevant service.
          </p>
          <p>
            We may also disclose information where required by applicable law or where
            reasonably necessary to protect the rights, security, or integrity of KWT, its
            members, or others.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain personal information only for as long as reasonably necessary for the
            purpose for which it was collected, to operate the KWT community, to maintain
            appropriate records, or to meet applicable legal obligations.
          </p>
          <p>
            The specific retention period may vary depending on the type of information and
            the purpose for which it was collected.
          </p>

          <h2>7. Your Choices and Rights</h2>
          <p>
            Depending on applicable law, you may have rights regarding your personal
            information, including the ability to:
          </p>
          <ul>
            <li>Request information about personal data we hold about you.</li>
            <li>Request correction of inaccurate or incomplete information.</li>
            <li>Request deletion of personal information where applicable.</li>
            <li>Withdraw consent where processing is based on consent.</li>
            <li>Opt out of non-essential communications such as newsletters.</li>
            <li>Raise a privacy-related concern or complaint.</li>
          </ul>
          <p>Requests may be made using the contact information provided below.</p>
          <p>
            We may need to verify your identity before acting on certain requests.
          </p>

          <h2>8. Data Security</h2>
          <p>
            We take reasonable measures to protect personal information against
            unauthorized access, loss, misuse, alteration, or disclosure.
          </p>
          <p>
            However, no internet transmission or electronic storage system can be
            guaranteed to be completely secure. You should therefore avoid submitting
            information through KWT forms that you do not consider appropriate for online
            submission.
          </p>

          <h2>9. Children's Privacy</h2>
          <p>
            KWT is intended primarily for women and girls participating in
            technology-related education, careers, and community activities.
          </p>
          <p>
            If you are under the applicable age of consent for the processing of personal
            data in your jurisdiction, please obtain any consent required by applicable law
            before submitting personal information through our forms.
          </p>
          <p>
            If we become aware that personal information has been submitted in
            circumstances where it should not have been collected, we will take reasonable
            steps to address the situation.
          </p>

          <h2>10. External Links</h2>
          <p>
            The KWT website may contain links to external websites, social-media platforms,
            event platforms, or other third-party services.
          </p>
          <p>
            We are not responsible for the privacy practices, security, or content of those
            external services. We recommend reviewing their privacy policies before
            providing personal information.
          </p>

          <h2>11. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes to our
            website, community activities, services, or applicable requirements.
          </p>
          <p>
            When we make changes, we will update the "Last updated" date at the top of this
            page.
          </p>
          <p>
            We encourage you to review this page periodically for the latest information
            about our privacy practices.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have questions, concerns, or requests relating to this Privacy Policy
            or your personal information, you can reach us at:
          </p>
          <p>
            <strong>Kashmiri Women in Tech (KWT)</strong>
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:kashmiriwomenintech@gmail.com">kashmiriwomenintech@gmail.com</a>
          </p>
          <p>
            We will do our best to respond to your request within a reasonable
            timeframe and in accordance with applicable law.
          </p>

        </div>
      </div>
    </PageContainer>
  );
}
