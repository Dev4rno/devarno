---
titlePlain: "Git"
titleColor: "Cheatsheet"
excerpt: "Version control: commands, workflows and tips"
cardImg: "/assets/img/blog/blog-github.png"
coverImg: "/assets/img/blog/blog-git-tree.jpg"
date: "2025-03-01T19:35:07.322Z"
tags: ["programming", "devops", "infrastructure"]
keywords:
    [
        "git cheatsheet",
        "git commands list",
        "git version control",
        "git tutorial",
        "git branch management",
        "github workflow",
        "git merge vs rebase",
        "git stash explained",
        "git best practices",
        "git troubleshooting",
        "bluesky analytics dashboard",
        "social media performance metrics",
        "bluesky growth tracking",
        "social network influence measurement",
        "bluesky user statistics",
        "content engagement analytics",
        "network influence metrics",
        "social media growth prediction",
        "bluesky follower analysis",
        "social media performance benchmarking",
        "atproto analytics",
        "atprotocol analytics",
        "atprotocol analytics tools",
        "buildinpublic",
        "startup development",
        "social media growth",
    ]
intro: "This cheatsheet provides a curated list of fundamental and advanced Git commands, helping you navigate repositories, track changes, and optimsze your workflow like a pro."
author:
    name: Alex Arno
    avatar: "/assets/img/hero/hero-lakes-headshot.png"
---

Git is more than just a version control system – it's a powerful tool that can transform how you manage code, collaborate with teams, and track project evolution.

### 🚀 Fundamental Concepts

#### Repository Setup and Configuration

```bash
# Initialize a new repository
git init

# Configure global user information
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# List current configurations
git config --list

# Set default editor (e.g., VS Code)
git config --global core.editor "code --wait"
```

#### Ignore Files

```bash
# Create a .gitignore file
touch .gitignore

# Common .gitignore entries
*.log
node_modules/
.env
.DS_Store
```

### 🔍 Advanced Tracking and Inspection

#### Detailed Change Tracking

```bash
# Show changes in working directory
git diff

# Show changes staged for commit
git diff --staged

# Show commit history
git log

# Detailed commit history with file changes
git log --stat

# Show changes in a specific commit
git show <commit-hash>

# Graphical log with branch visualization
git log --graph --oneline --all
```

### 🛠 Advanced Manipulation

#### Stashing and Temporary Saves

```bash
# Stash current changes
git stash

# List all stashes
git stash list

# Apply most recent stash
git stash apply

# Apply and remove most recent stash
git stash pop

# Create a stash with a message
git stash save "Work in progress"

# Apply a specific stash
git stash apply stash@{2}

# Clear all stashes
git stash clear
```

#### Undoing Changes

```bash
# Unstage a file
git reset <filename>

# Discard local changes in a file
git checkout -- <filename>

# Revert a commit (creates a new commit that undoes changes)
git revert <commit-hash>

# Amend the most recent commit
git commit --amend

# Completely remove last commit but keep changes
git reset HEAD~1

# Completely remove last commit and discard changes
git reset --hard HEAD~1
```

### 🌳 Advanced Branching

#### Branch Management

```bash
# List all local branches
git branch

# List all remote branches
git branch -r

# List all branches (local and remote)
git branch -a

# Create a branch from a specific commit
git branch <new-branch-name> <commit-hash>

# Track a remote branch
git branch -u origin/<remote-branch>

# Rename a branch
git branch -m <old-name> <new-name>
```

#### Merging / Rebasing

```bash
# Merge a branch into current branch
git merge <branch-name>

# Rebase current branch onto another
git rebase <base-branch>

# Interactive rebase (edit, squash, reorder commits)
git rebase -i HEAD~3

# Abort a merge or rebase
git merge --abort
git rebase --abort
```

### 🔒 Advanced Security

#### SSH Key Setup

```bash
# Generate SSH key
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# View SSH key
cat ~/.ssh/id_rsa.pub

# Test SSH connection to GitHub
ssh -T git@github.com
```

#### Submodules and Subtrees

```bash
# Add a submodule
git submodule add <repository-url> <path>

# Initialize submodules
git submodule init

# Update all submodules
git submodule update --recursive

# Clone a repository with submodules
git clone --recursive <repository-url>
```

### 🚨 Disaster Recovery

```bash
# Recover deleted branch
git reflog
git branch <branch-name> <commit-hash>

# Find lost commits
git fsck --lost-found

# Recover uncommitted changes
git fsck --cache --unreachable | grep commit | cut -d' ' -f3 | xargs git log --merges --no-walk --grep=WIP
```

## 💡 Performance and Optimization

```bash
# Cleanup unnecessary files and optimize repository
git gc

# Remove large files from repository history
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch <path-to-large-file>" \
  --prune-empty --tag-name-filter cat -- --all

# Shallow clone (download limited history)
git clone --depth 1 <repository-url>
```

### 🌈 Pro Tips and Tricks

1. **Aliases**: Create shortcuts for complex commands

```bash
# Example aliases
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.st status
```

1. **Git Hooks**: Automate actions before/after git events

```bash
# Pre-commit hook example (in .git/hooks/pre-commit)#!/bin/sh
npm test# Run tests before allowing commit

```

1. **Cherry-Pick**: Apply specific commits to another branch

```bash
git cherry-pick <commit-hash>

```

### 🤝 Collaborative Workflow Enhancements

#### Code Review Preparation

```bash
# Create a patch from commits
git format-patch origin/main

# Apply a patch
git am <patchfile>
```

### 📚 Learning Resources

-   [Pro Git Book](https://git-scm.com/book/en/v2)
-   [GitHub Learning Lab](https://lab.github.com/)
-   [Git Immersion Tutorial](https://gitimmersion.com/)

### 🚀 Continuous Learning

Git is a deep and powerful tool. This cheatsheet is just the beginning. Keep practicing, experimenting, and learning!

**Pro Tip**: When in doubt, `git help <command>` is your friend! 🆘
