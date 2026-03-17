import re

try:
    import fitz
    doc = fitz.open("public/resume.pdf")
    text = ""
    for page in doc:
        text += page.get_text()

    emails = list(set(re.findall(r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}", text)))
    print("EXTRACTED_EMAILS:", emails)
except Exception as e:
    print("ERROR:", e)
