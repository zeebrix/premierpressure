#!/usr/bin/env python3
"""Generate the client-facing SEO Implementation Report PDF."""
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, HRFlowable
)

OUT = r"C:\Users\Laptech\Downloads\Premier-Pressure-SEO-Implementation-Report.pdf"

NAVY = colors.HexColor("#0a1628")
NAVY2 = colors.HexColor("#1a2b45")
CYAN = colors.HexColor("#00b4d8")
PURPLE = colors.HexColor("#7c5cff")
GREEN = colors.HexColor("#16a34a")
AMBER = colors.HexColor("#d97706")
GREY = colors.HexColor("#6b7280")
LIGHT = colors.HexColor("#f3f4f6")
LINE = colors.HexColor("#e5e7eb")

styles = getSampleStyleSheet()

def S(name, **kw):
    styles.byName[name] = ParagraphStyle(name, **kw)

S("Brand", fontName="Helvetica-Bold", fontSize=20, leading=24, textColor=NAVY, spaceAfter=4)
S("BrandSub", fontName="Helvetica", fontSize=8.5, textColor=CYAN, spaceAfter=40, leading=12)
S("CoverTitle", fontName="Helvetica-Bold", fontSize=30, textColor=NAVY, leading=36, spaceAfter=8)
S("CoverLabel", fontName="Helvetica-Bold", fontSize=8.5, textColor=GREY, spaceBefore=18, spaceAfter=2)
S("CoverVal", fontName="Helvetica-Bold", fontSize=12, leading=15, textColor=NAVY, spaceAfter=2)
S("H1", fontName="Helvetica-Bold", fontSize=16, leading=20, textColor=NAVY, spaceBefore=18, spaceAfter=8)
S("H2", fontName="Helvetica-Bold", fontSize=12, leading=16, textColor=NAVY, spaceBefore=12, spaceAfter=5)
S("Body", fontName="Helvetica", fontSize=10, textColor=colors.HexColor("#222222"), leading=15, spaceAfter=8, alignment=TA_LEFT)
S("Bullet", fontName="Helvetica", fontSize=10, textColor=colors.HexColor("#222222"), leading=15, leftIndent=14, spaceAfter=4)
S("Small", fontName="Helvetica", fontSize=8.5, textColor=GREY, leading=12)
S("CellH", fontName="Helvetica-Bold", fontSize=9, textColor=colors.white)
S("Cell", fontName="Helvetica", fontSize=9, textColor=colors.HexColor("#222222"), leading=12)
S("CellB", fontName="Helvetica-Bold", fontSize=9, textColor=NAVY, leading=12)
S("Stat", fontName="Helvetica-Bold", fontSize=22, leading=26, textColor=NAVY, alignment=TA_CENTER)
S("StatLbl", fontName="Helvetica", fontSize=8, leading=10, textColor=GREY, alignment=TA_CENTER, spaceBefore=2)
S("Badge", fontName="Helvetica-Bold", fontSize=9, textColor=colors.white, alignment=TA_CENTER)

def header_footer(canvas, doc):
    canvas.saveState()
    # top accent bar
    canvas.setFillColor(PURPLE)
    canvas.rect(0, A4[1]-6, A4[0]/2, 6, stroke=0, fill=1)
    canvas.setFillColor(CYAN)
    canvas.rect(A4[0]/2, A4[1]-6, A4[0]/2, 6, stroke=0, fill=1)
    # footer
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(GREY)
    canvas.drawString(20*mm, 12*mm, "Zeebrix  -  zeebrix.com  -  Nollamara, Perth WA")
    canvas.drawRightString(A4[0]-20*mm, 12*mm, "Page %d" % doc.page)
    canvas.setStrokeColor(LINE)
    canvas.line(20*mm, 15*mm, A4[0]-20*mm, 15*mm)
    canvas.restoreState()

def badge(text, color):
    t = Table([[Paragraph(text, styles["Badge"])]], colWidths=[24*mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), color),
        ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
        ("TOPPADDING", (0,0), (-1,-1), 3),
        ("BOTTOMPADDING", (0,0), (-1,-1), 3),
    ]))
    return t

story = []

# ---------- COVER ----------
story.append(Spacer(1, 30))
story.append(Paragraph("ZEEBRIX", styles["Brand"]))
story.append(Paragraph("AI SOLUTIONS &nbsp;&bull;&nbsp; CUSTOM SOFTWARE &nbsp;&bull;&nbsp; WEB &amp; MOBILE", styles["BrandSub"]))
story.append(Spacer(1, 80))
story.append(Paragraph("SEO Implementation", styles["CoverTitle"]))
story.append(Paragraph("Report", styles["CoverTitle"]))
story.append(HRFlowable(width=70, thickness=3, color=PURPLE, spaceBefore=6, spaceAfter=6))
story.append(Paragraph("PREPARED FOR", styles["CoverLabel"]))
story.append(Paragraph("Premier Pressure Solutions WA", styles["CoverVal"]))
story.append(Paragraph("premierpressuresolutions.com.au", styles["Small"]))
cover_meta = Table([
    [Paragraph("DATE", styles["CoverLabel"]), Paragraph("PREPARED BY", styles["CoverLabel"])],
    [Paragraph("28 May 2026", styles["CoverVal"]), Paragraph("Zeebrix", styles["CoverVal"])],
], colWidths=[60*mm, 60*mm])
cover_meta.setStyle(TableStyle([("TOPPADDING",(0,0),(-1,-1),0),("BOTTOMPADDING",(0,0),(-1,-1),0)]))
story.append(Spacer(1, 10))
story.append(cover_meta)
story.append(Spacer(1, 40))
story.append(Paragraph("Confidential &bull; Prepared by Zeebrix &bull; zeebrix.com", styles["Small"]))
story.append(PageBreak())

# ---------- INTRO ----------
story.append(Paragraph("Introduction", styles["H1"]))
story.append(Paragraph(
    "Hi Lewis,", styles["Body"]))
story.append(Paragraph(
    "This report summarises the SEO foundation work we have completed on "
    "<b>premierpressuresolutions.com.au</b>, following the audit. The design of your "
    "site is unchanged - what we added is the SEO layer underneath it.", styles["Body"]))
story.append(Paragraph(
    "The core problem the audit identified was that the site rendered entirely in "
    "JavaScript, so search engines and social platforms received a near-empty page. "
    "We have rebuilt the site on a modern pre-rendering framework so that every page - "
    "the homepage, all service pages, and all 80+ suburb pages - now delivers full, "
    "crawlable content, unique metadata, structured data, and correct social and "
    "canonical signals in the very first response. <b>Everything in this report is live "
    "in production now.</b>", styles["Body"]))

# ---------- EXECUTIVE SUMMARY ----------
story.append(Paragraph("Executive Summary", styles["H1"]))
summ = Table([
    [Paragraph("OVERALL STATUS", styles["CoverLabel"]),
     Paragraph("CRITICAL ISSUES FIXED", styles["CoverLabel"]),
     Paragraph("FINDINGS ADDRESSED", styles["CoverLabel"])],
    [Paragraph("Foundation Complete &amp; Live", styles["CellB"]),
     Paragraph("3 of 3", styles["CellB"]),
     Paragraph("9 of 9 (code side)", styles["CellB"])],
], colWidths=[60*mm, 55*mm, 55*mm])
summ.setStyle(TableStyle([
    ("BACKGROUND",(0,0),(-1,-1), LIGHT),
    ("BOX",(0,0),(-1,-1),0.5, LINE),
    ("TOPPADDING",(0,0),(-1,-1),8),("BOTTOMPADDING",(0,0),(-1,-1),8),
    ("LEFTPADDING",(0,0),(-1,-1),10),
]))
story.append(summ)
story.append(Spacer(1, 8))
story.append(Paragraph(
    "All three critical issues from the audit are resolved and live. The remaining "
    "secondary items are either complete or now depend on input from you (testimonials, "
    "priority suburbs) or on actions inside Google Search Console (re-indexing, removals).",
    styles["Body"]))

# ---------- BASELINE ----------
story.append(Paragraph("Current Baseline (Search Console - last 3 months)", styles["H1"]))
story.append(Paragraph(
    "These are the &ldquo;before&rdquo; numbers, captured from your Google Search Console "
    "the day the foundation went live. We will measure improvement against them as Google "
    "re-crawls and re-indexes the now-readable pages over the coming weeks.", styles["Body"]))
def stat_box(v, l):
    t = Table([[Paragraph(v, styles["Stat"])], [Paragraph(l, styles["StatLbl"])]], colWidths=[40*mm])
    t.setStyle(TableStyle([
        ("ALIGN",(0,0),(-1,-1),"CENTER"),
        ("TOPPADDING",(0,0),(-1,-1),0),("BOTTOMPADDING",(0,0),(-1,-1),2),
        ("LEFTPADDING",(0,0),(-1,-1),0),("RIGHTPADDING",(0,0),(-1,-1),0),
    ]))
    return t
stats = Table([[
    stat_box("38","Total clicks"),
    stat_box("3,920","Total impressions"),
    stat_box("1%","Average CTR"),
    stat_box("54.9","Average position"),
]], colWidths=[42.5*mm]*4)
stats.setStyle(TableStyle([
    ("BACKGROUND",(0,0),(-1,-1), LIGHT),
    ("BOX",(0,0),(-1,-1),0.5, LINE),
    ("INNERGRID",(0,0),(-1,-1),0.5, colors.white),
    ("VALIGN",(0,0),(-1,-1),"MIDDLE"),
    ("TOPPADDING",(0,0),(-1,-1),12),("BOTTOMPADDING",(0,0),(-1,-1),12),
]))
story.append(stats)
story.append(Spacer(1, 6))
story.append(Paragraph(
    "Note: average position 54.9 means most pages currently sit on page 5+ of Google. "
    "The foundation we have built is exactly what is needed for those positions to climb.",
    styles["Small"]))

story.append(PageBreak())

# ---------- FINDINGS TABLE ----------
story.append(Paragraph("What We Fixed - Audit Findings", styles["H1"]))

def row(num, name, sev, status, scolor):
    return [
        Paragraph(num, styles["CellB"]),
        Paragraph(name, styles["Cell"]),
        Paragraph(sev, styles["Cell"]),
        badge(status, scolor),
    ]

data = [[
    Paragraph("#", styles["CellH"]),
    Paragraph("Finding", styles["CellH"]),
    Paragraph("Severity", styles["CellH"]),
    Paragraph("Status", styles["CellH"]),
]]
data += [
    row("01","Site rendered entirely in JavaScript","Critical","DONE - LIVE", GREEN),
    row("02","Every page had the same title &amp; description","Critical","DONE - LIVE", GREEN),
    row("03","Social sharing URL pointed to wrong domain","Critical","DONE - LIVE", GREEN),
    row("04","Suburb pages used identical content","High","FRAMEWORK LIVE", AMBER),
    row("05","Structured data / schema markup missing","High","DONE - LIVE", GREEN),
    row("06","Internal linking needed improvement","Medium","DONE - LIVE", GREEN),
    row("07","Core Web Vitals / page speed","Medium","DONE - LIVE", GREEN),
    row("08","Google Business Profile","Low","YOUR DECISION", GREY),
    row("09","Stale pages on old .com domain","Low","NEEDS GSC", GREY),
]
ft = Table(data, colWidths=[10*mm, 92*mm, 22*mm, 26*mm])
ft.setStyle(TableStyle([
    ("BACKGROUND",(0,0),(-1,0), NAVY),
    ("ROWBACKGROUNDS",(0,1),(-1,-1), [colors.white, LIGHT]),
    ("BOX",(0,0),(-1,-1),0.5, LINE),
    ("LINEBELOW",(0,0),(-1,0),0.5, NAVY),
    ("VALIGN",(0,0),(-1,-1),"MIDDLE"),
    ("TOPPADDING",(0,0),(-1,-1),6),("BOTTOMPADDING",(0,0),(-1,-1),6),
    ("LEFTPADDING",(0,0),(-1,-1),8),
]))
story.append(ft)
story.append(Spacer(1, 6))
story.append(Paragraph(
    "&ldquo;Framework live&rdquo; for finding #04 means the system that makes each suburb "
    "page unique is built and live (3 suburbs fully written as examples); the remaining "
    "suburbs need your local input and testimonials to complete - see &ldquo;What We Need "
    "From You&rdquo;.", styles["Small"]))

# ---------- TECHNICAL WORK COMPLETED ----------
story.append(PageBreak())
story.append(Paragraph("Technical Work Completed", styles["H1"]))
story.append(Paragraph(
    "The full list of technical tasks delivered, grouped by area. Everything below is "
    "live in production on the existing design.", styles["Body"]))

work = [
    ("Framework &amp; Rendering (the core fix)", [
        "Migrated the site from a Vite single-page app to <b>Next.js (App Router)</b> - the modern pre-rendering framework recommended in the audit.",
        "Implemented <b>static pre-rendering (SSG)</b> for all 110+ pages, so each page is served as complete, crawlable HTML before any JavaScript runs.",
        "Collapsed 80+ near-identical suburb pages into one maintainable template driven by a single data file.",
        "Deployed to production on Vercel; confirmed Googlebot now crawls full page content (Rich Results Test crawled successfully).",
    ]),
    ("Page Metadata", [
        "Unique, keyword-led <b>title tag</b> on every page - homepage, all service pages, and all suburb pages.",
        "Unique <b>meta description</b> per page.",
        "Removed the legacy <b>meta keywords</b> tag.",
    ]),
    ("Canonical &amp; Social Sharing", [
        "Server-rendered <b>canonical tag</b> on every page (correct www domain and /perth/ paths).",
        "<b>og:url</b> and <b>twitter:url</b> now use each page's real URL (previously pointed to a domain that does not exist).",
        "<b>og:image</b> set to an absolute URL so social preview thumbnails render correctly.",
    ]),
    ("Structured Data (Schema)", [
        "<b>LocalBusiness</b> schema site-wide - business name, phone, opening hours, location, and all serviced suburbs.",
        "<b>Service</b> schema on service pages, <b>FAQPage</b> on suburb pages, and <b>BreadcrumbList</b> on suburb &amp; service pages.",
        "Validated with Google's Rich Results Test - <b>4 valid items detected</b>, eligible for rich results.",
    ]),
    ("Performance / Core Web Vitals", [
        "Hero and large images served via Next.js optimised images (modern WebP format, responsive sizes).",
        "Lazy loading applied to below-the-fold images.",
        "Self-hosted, preloaded web font - removed the render-blocking external font request.",
    ]),
    ("Internal Linking &amp; Content", [
        "Service pages now link to suburb pages, and suburb pages link back to services (bidirectional internal linking).",
        "Per-suburb content framework (unique intro, local context, and FAQs) - 3 suburbs completed as worked examples.",
        "Testimonial rotation so suburb pages no longer all display the same three reviews.",
    ]),
    ("Indexing &amp; Cleanup", [
        "Generated an accurate XML <b>sitemap (110 URLs)</b> and robots.txt, served natively by the site.",
        "Submitted the sitemap to Google Search Console - <b>111 pages discovered, status: Success</b>.",
        "Corrected four incorrect / dead domain variants found across page URLs, schema, and email links.",
    ]),
]
for _h, _items in work:
    story.append(Paragraph(_h, styles["H2"]))
    for _it in _items:
        story.append(Paragraph("&bull; " + _it, styles["Bullet"]))

# ---------- WHAT THIS MEANS ----------
story.append(Paragraph("What This Means For You (plain English)", styles["H1"]))
items = [
    ("Google can now read every page.", "Previously crawlers and social platforms saw a near-blank page. Now the full content, headings and links are served instantly."),
    ("Each page targets its own keyword.", "Every suburb and service page now has a unique, keyword-led title and description instead of one shared default - so they can rank separately."),
    ("Sharing links and previews work.", "Social/share URLs now point to the real site (they previously pointed to a domain that does not exist), with proper preview images."),
    ("Your business is structured for Google.", "LocalBusiness, Service, Breadcrumb and FAQ data is embedded so Google understands your services, service areas and answers."),
    ("The site is faster.", "Images and fonts are optimised and modernised, which helps both ranking (Core Web Vitals) and visitor experience."),
    ("Pages link together properly.", "Service pages now link to suburbs and suburbs link to services, helping Google discover and value every page."),
]
for h, b in items:
    story.append(Paragraph("&bull; <b>%s</b> %s" % (h, b), styles["Bullet"]))

story.append(PageBreak())

# ---------- LIVE & VERIFIABLE ----------
story.append(Paragraph("Live &amp; Verifiable Right Now", styles["H1"]))
story.append(Paragraph("Anyone can confirm these on the live site:", styles["Body"]))
checks = [
    "Every page returns its own unique title and meta description in the page source.",
    "A canonical tag is present on every page (e.g. /perth/heathridge).",
    "LocalBusiness + FAQ + Breadcrumb structured data is embedded in the HTML.",
    "An accurate sitemap with 110 URLs is served at /sitemap.xml.",
    "Service pages link out to suburb pages, and suburb pages link to services.",
    "Pages load as real HTML before any JavaScript runs.",
]
for c in checks:
    story.append(Paragraph("&bull; %s" % c, styles["Bullet"]))

# ---------- SEARCH CONSOLE COMPLETED ----------
story.append(Paragraph("Already Actioned in Google Search Console", styles["H1"]))
story.append(Paragraph(
    "Using your Search Console access, the following have already been completed:", styles["Body"]))
gsc_done = [
    "<b>Sitemap submitted</b> - status: Success, <b>111 pages discovered</b> by Google.",
    "<b>Structured data validated</b> - Google's Rich Results Test reports <b>4 valid items</b> (LocalBusiness, FAQ, Breadcrumbs) and the page was crawled successfully.",
    "<b>Indexing requested</b> on the priority pages to speed up re-crawling.",
]
for g in gsc_done:
    story.append(Paragraph("&bull; " + g, styles["Bullet"]))
story.append(Paragraph(
    "These confirm Google has received the updated site and is now processing it. Indexing "
    "of all pages typically completes over the following 1-4 weeks.", styles["Small"]))

# ---------- WHAT WE NEED ----------
story.append(Paragraph("What We Need From You", styles["H1"]))
story.append(Paragraph(
    "To move into Stage 2 (local growth) and finish the remaining items, we need:", styles["Body"]))
need = [
    ("Top 10-15 priority suburbs", "So we put the deepest unique content into the suburbs that matter most to you first."),
    ("Additional testimonials / reviews", "Any reviews beyond the three on the site (Google, Facebook, emails) so we can rotate a wider pool across suburb pages."),
    ("Google Business Profile decision", "Confirm whether you want us to optimise your GBP - often the biggest driver of 'near me' enquiries."),
    ("Old .com page removals (optional)", "If you have access to the old premierpressuresolutions.com property, we can submit removals; otherwise these stale pages drop out on their own."),
]
nd = [[Paragraph("Item", styles["CellH"]), Paragraph("Why we need it", styles["CellH"])]]
for a,b in need:
    nd.append([Paragraph(a, styles["CellB"]), Paragraph(b, styles["Cell"])])
ndt = Table(nd, colWidths=[48*mm, 102*mm])
ndt.setStyle(TableStyle([
    ("BACKGROUND",(0,0),(-1,0), PURPLE),
    ("ROWBACKGROUNDS",(0,1),(-1,-1), [colors.white, LIGHT]),
    ("BOX",(0,0),(-1,-1),0.5, LINE),
    ("VALIGN",(0,0),(-1,-1),"TOP"),
    ("TOPPADDING",(0,0),(-1,-1),7),("BOTTOMPADDING",(0,0),(-1,-1),7),
    ("LEFTPADDING",(0,0),(-1,-1),8),
]))
story.append(ndt)

# ---------- NEXT STEPS ----------
story.append(Paragraph("What Happens Next", styles["H1"]))
story.append(Paragraph(
    "Over the next 4-8 weeks, as Google re-crawls the now-readable site, we expect "
    "impressions and average position to improve. We will monitor Search Console and "
    "share progress against the baseline above. Once your testimonials and priority "
    "suburbs come through, we complete the suburb content and begin Stage 2 local "
    "growth work.", styles["Body"]))
story.append(Spacer(1, 6))
story.append(HRFlowable(width="100%", thickness=0.5, color=LINE, spaceBefore=4, spaceAfter=8))
story.append(Paragraph(
    "Questions about anything in this report? Just reply and we will walk you through it.",
    styles["Small"]))
story.append(Paragraph("Zeebrix &bull; zeebrix.com &bull; Nollamara, Perth WA", styles["Small"]))

doc = SimpleDocTemplate(
    OUT, pagesize=A4,
    leftMargin=20*mm, rightMargin=20*mm, topMargin=22*mm, bottomMargin=20*mm,
    title="SEO Implementation Report - Premier Pressure Solutions WA",
    author="Zeebrix",
)
doc.build(story, onFirstPage=header_footer, onLaterPages=header_footer)
print("WROTE", OUT)
