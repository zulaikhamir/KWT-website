# Privacy Policy Content Guide

## Overview

This guide explains how to add the actual privacy policy content to the Privacy Policy page structure.

## Current Status

The Privacy Policy page (`src/pages/Privacy.tsx`) has been implemented with:
- ✅ Proper page structure and layout
- ✅ SEO metadata
- ✅ Professional header with "Last updated" date
- ✅ Content section with prose styling
- ✅ Contact information section
- ✅ Clear placeholders for content

**What's missing:** The actual privacy policy text and contact details.

## How to Add Privacy Policy Content

### Step 1: Open the Privacy Policy Page

Open `src/pages/Privacy.tsx` in your editor.

### Step 2: Locate the Content Placeholder

Find this section in the file:

```tsx
{/* ═══════════════════════════════════════════════════════════════
    PRIVACY POLICY CONTENT PLACEHOLDER
    ═══════════════════════════════════════════════════════════════
    Replace the line below with the actual privacy policy content.
    Use semantic HTML: <h2>, <h3>, <p>, <ul>, <ol>, <strong>, etc.
    ═══════════════════════════════════════════════════════════════ */}
<p className="text-[var(--color-secondary)]">[PRIVACY POLICY CONTENT WILL BE ADDED HERE]</p>
{/* ═══════════════════════════════════════════════════════════════ */}
```

### Step 3: Replace with Actual Content

Replace the placeholder line with your privacy policy content using proper HTML markup. For example:

```tsx
{/* Replace the placeholder with actual content: */}

<h2>Introduction</h2>
<p>
  This Privacy Policy describes how Kashmiri Women in Tech ("KWT", "we", "us", or "our")
  collects, uses, and protects your personal information when you use our website and services.
</p>

<h2>Information We Collect</h2>
<p>We collect the following types of information:</p>
<ul>
  <li>
    <strong>Personal Information:</strong> Name, email address, and other information you
    provide when registering for events or joining our community.
  </li>
  <li>
    <strong>Usage Data:</strong> Information about how you interact with our website, including
    pages visited, time spent, and referring websites.
  </li>
</ul>

<h2>How We Use Your Information</h2>
<p>We use the information we collect to:</p>
<ol>
  <li>Provide and improve our services</li>
  <li>Send event notifications and community updates</li>
  <li>Respond to your inquiries and requests</li>
  <li>Analyze website usage and improve user experience</li>
</ol>

{/* Continue with more sections... */}
```

### Step 4: Add Contact Information

Find the contact information placeholder:

```tsx
{/* ═══════════════════════════════════════════════════════════════
    CONTACT INFORMATION PLACEHOLDER
    ═══════════════════════════════════════════════════════════════
    Add actual contact details here when finalized:
    - Email address
    - Mailing address (if applicable)
    - Contact form link (if applicable)
    ═══════════════════════════════════════════════════════════════ */}
<p>
  <strong className="font-medium text-[var(--color-primary)]">Email:</strong>
  {" "}[Contact email will be added here]
</p>
{/* ═══════════════════════════════════════════════════════════════ */}
```

Replace with actual contact details:

```tsx
<p>
  <strong className="font-medium text-[var(--color-primary)]">Email:</strong>
  {" "}<a href="mailto:kashmiriwomenintech@gmail.com">kashmiriwomenintech@gmail.com</a>
</p>
<p>
  <strong className="font-medium text-[var(--color-primary)]">Website:</strong>
  {" "}<a href="https://kwtcommunity.org/contact">Contact Form</a>
</p>
```

### Step 5: Update the "Last Updated" Date

Find this line in the header section:

```tsx
<time dateTime="2026-08-24">August 24, 2026</time>
```

Update both the `dateTime` attribute and the display text to match when you finalize the policy.

## Supported HTML Elements

The `.prose-kwt` styling supports these semantic HTML elements:

| Element | Purpose | Example |
|---------|---------|---------|
| `<h2>` | Main section heading | "Information We Collect" |
| `<h3>` | Subsection heading | "Personal Information" |
| `<h4>` | Minor subsection | "Third-Party Services" |
| `<p>` | Paragraph | Standard text content |
| `<ul>` | Unordered list | Bullet points |
| `<ol>` | Ordered list | Numbered steps |
| `<li>` | List item | Individual bullet/number |
| `<strong>` | Bold emphasis | Important terms |
| `<em>` | Italic emphasis | Slight emphasis |
| `<a>` | Link | External references |
| `<blockquote>` | Quote | Legal quotes |
| `<code>` | Inline code | Technical terms |
| `<hr>` | Horizontal rule | Section divider |
| `<table>` | Table | Data retention periods |

## Example Privacy Policy Structure

Here's a recommended structure:

```tsx
<h2>1. Introduction</h2>
<p>Opening statement about the policy...</p>

<h2>2. Information We Collect</h2>
<h3>2.1 Personal Information</h3>
<ul>
  <li>Name and email address</li>
  <li>Professional information</li>
</ul>

<h3>2.2 Usage Data</h3>
<p>Description of usage data...</p>

<h2>3. How We Use Your Information</h2>
<p>Explanation of data usage...</p>

<h2>4. Data Sharing and Disclosure</h2>
<p>Third-party sharing policies...</p>

<h2>5. Data Security</h2>
<p>Security measures...</p>

<h2>6. Your Rights</h2>
<ul>
  <li>Right to access your data</li>
  <li>Right to correction</li>
  <li>Right to deletion</li>
</ul>

<h2>7. Cookies and Tracking</h2>
<p>Cookie usage explanation...</p>

<h2>8. Changes to This Policy</h2>
<p>How updates are communicated...</p>
```

## Tips for Writing Privacy Policy Content

1. **Use clear, plain language** - Avoid legal jargon when possible
2. **Be specific** - State exactly what data you collect and why
3. **Be honest** - Don't promise things you can't deliver
4. **Include all required sections** for your jurisdiction (GDPR, CCPA, etc.)
5. **Link to third-party policies** when you use third-party services (Tally, etc.)
6. **Keep it updated** - Review and update whenever your data practices change

## Important Sections to Include

Your privacy policy should cover:

- [ ] What information you collect (personal, usage, cookies)
- [ ] How you collect it (forms, analytics, etc.)
- [ ] Why you collect it (event registration, communication, etc.)
- [ ] How you use it
- [ ] Who you share it with (if anyone)
- [ ] How long you keep it
- [ ] Users' rights (access, deletion, correction)
- [ ] How you protect it (security measures)
- [ ] Cookie usage and tracking
- [ ] Children's privacy (if applicable)
- [ ] International data transfers (if applicable)
- [ ] How to contact you about privacy concerns
- [ ] How you'll notify users of changes

## After Adding Content

1. **Review for accuracy** - Ensure all statements match your actual practices
2. **Legal review** - Consider having a lawyer review the policy
3. **Test the page** - Check formatting, links, and readability
4. **Update the date** - Set the "Last updated" date
5. **Announce the update** - Notify users if this is a significant change

## Verification

After adding content, verify the page by:

1. Running the dev server: `npm run dev`
2. Navigating to `/privacy`
3. Checking:
   - All headings render correctly
   - Lists are properly formatted
   - Links work
   - Contact information is correct
   - Date is accurate
   - Content is readable and flows well

## Resources

Consider consulting these resources when writing your privacy policy:

- **GDPR Compliance** (EU): https://gdpr.eu/
- **CCPA Guide** (California): https://oag.ca.gov/privacy/ccpa
- **Privacy Policy Generator Tools**: Termly, iubenda, or similar (use as starting points only)
- **Legal counsel**: Always recommended for final review

---

**Note:** This is just the page structure. The actual privacy policy content must accurately reflect KWT's real data collection and processing practices. Do not use generic templates without customization.
