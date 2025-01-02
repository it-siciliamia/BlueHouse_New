# Deployment Github Pages

https://it-siciliamia.github.io/BlueHouse_New/

# How to Work with the Project

## If You're Starting from Scratch

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/it-siciliamia/BlueHouse_New.git
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

   If there are dependency issues, use:

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Create a New Working Branch**:

   ```bash
   git checkout -b your_work_task_name
   ```

4. **Start the Project Locally**:

   ```bash
   npm start
   ```

   Make your changes and test them locally.

5. **Stage Your Changes**:

   ```bash
   git add .
   ```

6. **Commit Your Changes**:

   ```bash
   git commit -m "your_comments_about_work"
   ```

7. **Push Your Branch to the Repository**:

   ```bash
   git push origin your_work_task_name
   ```

8. **Create a Pull Request**:
   1. Open the repository in your browser:  
      [https://github.com/it-siciliamia/BlueHouse_New](https://github.com/it-siciliamia/BlueHouse_New)
   2. Go to the **Pull Requests** tab.
   3. Click **New Pull Request**.
   4. In the "base" field, select the branch where changes should be merged (e.g., `main`).
   5. Review the list of changes (GitHub will display all modified files).
   6. Select the person who will review and approve your Pull Request.
   7. Add a title and description to explain the purpose of the changes.
   8. Click **Create Pull Request**.

---

## If the Project Is Already Cloned

1. **Fetch the Latest Changes** (ensure you're on the `main` branch):

   ```bash
   git pull origin
   ```

2. **Create a New Working Branch**:

   ```bash
   git checkout -b your_work_task_name
   ```

3. **Start the Project Locally**:

   ```bash
   npm start
   ```

4. Make your changes and test them.

---

## Key Notes

- **Do Not Push Directly to `main` or `Final_Changes` Branches**:
  Always work in separate branches created for each task.

- **Update Your Branch Regularly**:
  Before starting work, fetch and merge changes from `main`:

  ```bash
  git pull origin main
  ```

- **Commit Changes Frequently**:
  Use clear and descriptive commit messages.

By following these steps, you'll ensure smooth collaboration and maintain consistency across the project team.
