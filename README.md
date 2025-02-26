# Sync Board

[🌎 Visit Site](https://sync-board-alpha.vercel.app)
Sync Board is a **real-time collaborative document editor** built with **Next.js 15** and **Tiptap Editor**. It enables users to create and edit various types of documents in real time, leveraging **Liveblocks** for seamless collaboration. Users can mention others in documents, chat while editing, and use **prebuilt templates** to kickstart their work. Additionally, Sync Board allows saving documents in multiple formats.

## ![main](/public/Images/scrnst/collage.png)

## Features

### 🚀 Real-Time Collaboration

![Sync Board](/public/Images/scrnst/img9.png)

- Users can edit documents simultaneously.
- Changes are reflected instantly using **Liveblocks**.

**_Image Suggestion:_ Screenshot showing two users editing a document in real-time.\_**

### 💬 User Mentions & Chat

![message](/public/Images/scrnst/img7.png)

- Mention other users within the document.
- Engage in inline discussions while editing.

**_Image Suggestion:_ Example of user mention feature with chat bubbles.\_**

### 📄 Prebuilt Templates

![templates](/public/Images/scrnst/img10.png)

- Various document templates to choose from.
- Saves time by providing ready-made structures.

**_Image Suggestion:_ Grid view displaying available document templates.\_**

### 💾 Export & Save Documents

![export_options](/public/Images/scrnst/img11.png)

- Save files in multiple formats (PDF, Markdown, etc.).
- Download documents easily.

**_Image Suggestion:_ UI mockup showing export options.\_**

### 🎨 Beautiful UI

![export_options](/public/Images/scrnst/img3.png)

- Styled with **Tailwind CSS** for a modern and responsive experience.

**_Image Suggestion:_ Elegant UI with a dark and light mode preview.\_**

## Tech Stack

- **Frontend:** Next.js 15, React, Tailwind CSS
- **Editor:** Tiptap
- **Real-Time Collaboration:** Liveblocks
- **Authentication:** Clerk
- **Deployment:** Vercel

**_Image Suggestion:_ Tech stack logos (Next.js, Tailwind, Liveblocks, etc.).\_**

---

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/KanadShee-18/SyncBoard.git
   ```
2. Install dependencies:

   ```bash
   npm install --legacy-peer-deps
   ```

   for yarn or bun it will be simpe,

   ```
   bun install or, yarn install
   ```

3. Set up environment variables:
   ```plaintext
   CONVEX_DEPLOYMENT=your_api_key
   NEXT_PUBLIC_CONVEX_URL=generated through npx convex dev
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=clerk_secret_key
   LIVEBLOCKS_SECRET_KEY=liveblocks_secret
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
   and also
   ```
   npx convex dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser and see how cool it is.

## Usage

1. Sign in and create a new document.
2. Choose a template or start from scratch.
3. Mention collaborators and edit in real-time.
4. Save or export your document in the desired format.

## Contributing

We welcome contributions! Feel free to:

- Open issues for bugs or feature requests.
- Submit pull requests for improvements.

---

### 📞 Connect with Us

For any queries or feedback, reach out via [GitHub Issues](https://github.com/KanadShee-18/SyncBoard/issues).

---

## THANK YOU !
