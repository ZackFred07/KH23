# KH23


# Git LFS Setup Prerequisite 
To work with this repository, you need to have Git LFS (Large File Storage) installed on your system. Git LFS helps manage large files and keeps your repository within GitHub's file size limits.

Follow these steps to install Git LFS and set it up in your terminal:

## Install Git LFS

The installation process varies depending on your operating system. Choose the appropriate method for your system:

### Linux (Debian/Ubuntu):

```bash
sudo apt-get install git-lfs
```

### Linux (Fedora):

```bash
sudo dnf install git-lfs
```

### macOS (Homebrew):

If you have Homebrew installed, you can install Git LFS using the following command:

```bash
brew install git-lfs
```

### macOS (MacPorts):

If you use MacPorts, you can install Git LFS with the following command:

```bash
sudo port install git-lfs
```

### Windows:

Download and run the Git LFS installer from the official Git LFS website: [Git LFS Website](https://git-lfs.github.com/)

## Initialize Git LFS

Once Git LFS is installed, navigate to your Git repository using the terminal and run the following command to initialize Git LFS for your repository:

```bash
git lfs install
```

## Track Large Files

You can now start tracking large files with Git LFS. To do this, use the `git lfs track` command followed by a file pattern (or individual file names) to specify which files should be managed by Git LFS. For example, to track all files with the ".obj" extension:

```bash
git lfs track "*.obj"
git lfs track "*.gltf"
```

This command creates or updates a `.gitattributes` file in your repository to specify which files should be handled by Git LFS.

## Commit and Push

After tracking the large files, commit your changes to the repository as you normally would:

```bash
git add .
git commit -m "Add large files"
```

Finally, you can push your changes to GitHub:

```bash
git push origin branch-name
```

With these steps, you've successfully installed Git LFS, initialized it for your repository, and started tracking large files using Git LFS. Large files will be stored externally, and your repository will contain pointers to those files, ensuring that you don't exceed GitHub's file size limit.

Now you're ready to work with large files in this repository seamlessly!


