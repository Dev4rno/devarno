---
titlePlain: "Password,"
titleColor: "please!"
excerpt: "Simplifying security with FastAPI"
cardImg: "/assets/img/blog/password-please-card.png"
coverImg: "/assets/img/blog/password-please-cover.jpg"
date: "2024-10-20T19:35:07.322Z"
tags: ["password", "security", "fastapi", "python", "webdev"]
intro: "As we navigate the challenges of 2024, one constant remains: the need for strong, reliable passwords."
author:
    name: Alex Arno
    avatar: "/assets/img/hero/hero-lakes-headshot.png"
---

#### Tying a (secure) knot

2024 has certainly been different.

Among the many curveballs of the year so far, watching most of my university friends getting married has been nothing short of exceptional - both to witness and be a part of. Big shoutout to all involved; you know who you are.

Now, onto the bachelor parties...

I found myself in some interesting conversations over the countless stag weekends. One topic that came up surprisingly often? **Passwords**.

Many of my friends confessed to using the same password for most of their accounts (if you're nodding along, you’re in the right place).

While it might make life a tad easier, recycling the same password is a cyber-culprit's dream come true.

One of the most common pain points people face when creating passwords is the eternal struggle between memorability and security. We've all been there: you're setting up a new account, and the temptation to reuse a snappy, memorable password is strong. It's the password equivalent of comfort food - a familiar choice that's easy to remember but, unfortunately, just as easy to compromise.

We've all heard about the dark side of the internet and the lurking threats. It's almost 2025, and while we may not have flux capacitors or flying cars just yet, we do have advancements like smart homes, AI assistants, and self-driving vehicles.

These innovations highlight the need for some very real security considerations:

#### 1. The Key Problem

Imagine a thief trying to gain entry to a house by trying **_every key in existence_**. That's essentially what a [brute force attack](https://www.fortinet.com/resources/cyberglossary/brute-force-attack) is - trying different combinations until the right one is found.

A short password like `12345` can be cracked **_almost instantly_**. A ten-digit password has 17,000 times the possible combinations that a six-digit one does, drastically increasing security.

Short and simple passwords can (and will) fall like dominoes.

#### 2. Longer is Stronger

Longer and complex passwords take vastly more time and computational power to crack.

For example, according to research, a _seven-character_ alphabetical password could be cracked in 50 minutes (or less).

Extend that to ten characters, and the time shoots up to two years.

Make it twelve, and you’re looking at roughly one thousands years (seriously).

#### 3. Ditch Predictable Patterns

Many people opt for familiar words or phrases in their passwords, but hackers anticipate this and use targeted word lists to crack them. Creating a unique, random password helps you dodge this predictability trap.

Using something like your childhood pet's name? Your favourite food? The town you grew up in?

That's exactly the kind of pattern hackers eat for breakfast. Keep them guessing with unpredictability.

With all that said, this is the perfect opportunity to pull out this table I’m sure you’ve seen before.

Behold!

![password_statistics.png {600x600} {priority} {caption: Hive Systems Password Table (2024)}](/assets/img/blog/password-please-hive-table.png)

Those are some pretty startling numbers, right?

Instead of losing sleep over the consequences, let's implement a solution.

### Password, please!

Let me introduce you to **Password, please! (**`pwplz` **)** - a slick new tool I've launched at [pwplz.com](http://pwplz.com/) that's here to take the stress out of creating secure passwords.

`pwplz` provides instant access to a variety of secure passwords, which can be easily managed if you choose to embrace the right tools and ditch the hand-written notes. Copy your preferred password and paste it directly into your password manager or file.

#### PasswordGenerator

This application is a fantastic example of how simple yet powerful coding can be, making it an excellent entry point for anyone interested in coding and programming. At its heart is the `PasswordGenerator`, a straightforward yet versatile class with various methods for generating different types of passwords:

##### 1. Random

Uses a mix of letters, numbers, and symbols to create a password that’s hard to predict. Super secure with a good mix of characters that can fend off brute-force attacks, but they’re tough to remember without a password manager. Python's `secrets` module helps us generate these strong, random passwords by picking a combination of letters, digits, and symbols:

```python
import secrets, itertools

def _create_random_password(self) -> str:
    """Generate a password using random sampling"""
    password_chars = [secrets.choice(charset) for charset in self.charsets]
    permitted_chars = ''.join(itertools.chain(*self.charsets))
    chars_left = self.min_length - len(password_chars)
    for _ in range(chars_left):
        password_chars += [secrets.choice(permitted_chars)]
    secrets.SystemRandom().shuffle(password_chars)
    password = ''.join(password_chars)
    return password


# JAnp"m9A2%9f?+3oqf@PJ@m~z3]!W9-k73K}+';<]<iJ*>1eBuV|U1O\"kJ%Csk3hXr^ynI,/=l1&q1g
```

##### 2. Argon2

A modern encryption technique that ensures your passwords are securely hashed, adding an extra layer of protection. While Argon gives top-notch security against side-channel and brute-force attacks, it can be slow and not always supported everywhere. In Python, the `argon2` package lets us hash passwords securely using this robust, memory-hard algorithm:

```python
from argon2 import PasswordHasher

def _create_argon2_password(self) -> str:
    """Generate a password using Argon2"""
    hasher = PasswordHasher()
    password = hasher.hash(secrets.token_hex(32))
    return password[:self.min_length]

# $argon2id$v=19$m=65536,t=3,p=4$A7wXz8AZW6PqnykpAkFRTQ$aUVbqSaPIMcOcf/bX15wMuHxZQ
```

##### 3. Diceware

Combines random words to form a longer passphrase that is both secure and somewhat easier to remember, but tends to be lengthy and not ideal for systems with short password limits. In Python, we simply pick words randomly from a list, making long yet easier-to-recall passphrases:

```python
def _create_diceware_password(self) -> str:
    """Generate a Diceware-based password"""
    password = ""
    wordlist = self._get_random_words()
    if not wordlist:
        return ""
    while len(password) < self.min_length:
        password += secrets.choice(wordlist) + '-'
    return password.rstrip('-')

# tambourine-kiosk-helium-willow-quilt-keychain-snowman-insect-daffodil-dragonfly
```

##### 4. UUID

These universally unique identifiers, which are long strings that are unique to each generation, are great for ensuring uniqueness, but lack the complexity for high-security needs. In Python, the `uuid` module creates these identifiers, offering uniqueness with a bit of predictability:

```python
import uuid

def _create_uuid_password(self) -> uuid.UUID:
    """Generate a Universally Unique Identifier password"""
    return str(uuid.uuid4())

# 369d3e98-6ea8-4016-a4ea-9f4554477045
```

##### 5. Hash

Uses cryptographic hashing like SHA-256 to turn input into secure, irreversible passwords, but their strength hinges on using a strong seed and salt. In Python, this involves digesting input data with `hashlib` to generate a secure password:

```python
import secrets, hashlib

def _create_hash_password(self) -> str:
    """Generate a password using a hash function"""
    random_string = secrets.token_bytes(16)
    hash_digest = hashlib.sha256(random_string).hexdigest()
    return hash_digest

# 465289f8ab6c1d249c13a023d07d6c8be759601eee7af2e0a0340747ea727567
```

##### 6. Bcrypt

A go-to for secure password hashing with an adjustable work factor that ups the difficulty over time, but it's slower and may not suit high-speed environments. In Python, the `bcrypt` package is used to create hashes, ensuring they're tough against brute-force attacks:

```python
import bcrypt, secrets

def _create_bcrypt_password(self) -> str:
    """Generate a salted and hashed password with bcrypt"""
    salt = bcrypt.gensalt()
    password = bcrypt.hashpw(secrets.token_bytes(16), salt)
    password = password.decode("utf-8", "ignore")
    return password

# $2b$12$XTCbeMQU6S1yEIK78QJPoOlYLqATJS68I1GFd/lI6mpqtjPSfI5WS
```

Given our class methods, we can define an `Enum` to restrict the type of password that a user can request:

```python
from enum import Enum

class PasswordType(Enum):
    RANDOM="random"
    ARGON2="argon2"
    DICEWARE="diceware"
    UUID="uuid"
    HASH="hash"
    BCRYPT="bcrypt"
```

The PasswordGenerator class then is initialised with keyword arguments that must include:

-   `min_length`: the minimum password length required, where applicable
-   `words`: a hyphen-joined list of words for Diceware passwords.

These can (and should) be configured separately within a `.env` file, like so:

```bash
MIN_LENGTH=50
DICEWARE_WORDS=kiwi-apple-orange-banana-watermelon
```

and then passed to the `PasswordGenerator` upon initialisation:

```python
import os

if __name__ == "__main__":
    MIN_LENGTH = int(os.getenv("MIN_LENGTH"))
    DICEWARE_WORDS = os.getenv("DICEWARE_WORDS")
    generator = PasswordGenerator(min_length=MIN_LENGTH, words=DICEWARE_WORDS)
```

If you're completely new to Python, the `if __name__ == "__main__":` block lets you run code only when the file is executed directly, and not when imported as a module. Think of this block as location for any code that should execute solely when your script runs on its own (e.g. `python3 my_file.py`). Check out [this resource](https://realpython.com/if-name-main-python/) for more clarity.

#### FastAPI

The magic of this app lies in its straightforward simplicity, with [FastAPI](https://fastapi.tiangolo.com/) as the key player making everything work seamlessly. I was eager to craft a project that highlights just how amazing Python can be, and FastAPI's approachable nature made it all come together effortlessly.

Like Flask, Django, and Tornado, FastAPI lets you effortlessly switch up response types. You can easily craft a sleek HTML frontend that syncs seamlessly with an ultra-responsive backend, enabling developers to deliver features at lightning-fast speeds. This post certainly isn't to downplay the power of other frameworks - each shines in different contexts and technical requirements (stay tuned for another app and post soon).

`pwplz` uses FastAPI for processing requests for password generation, dynamically rendering HTML templates with the generated data, and delivering them back to the user swiftly via one of two endpoints:

##### 1. Render All Passwords

Method: `GET /`

This endpoint is responsible for displaying all generated passwords using the `render_all_passwords` endpoint function. When a user visits this route, the application generates a series of passwords using the different methods available in the `PasswordGenerator` class. It then serves the `all_passwords.html` template, filling it with these passwords and a randomly chosen password method to highlight the method-specific route capability.

```python
#-=-=-=-=-=-=-=-=-=-=-=-=>
# Default route
@app.get("/", response_class=HTMLResponse)
#-=-=-=-=-=-=-=-=-=-=-=-=>

async def render_all_passwords(request: Request):
    """Endpoint to render a simple HTML page with all generated passwords"""
    try:
        return templates.TemplateResponse(
            request=request,
            name="all_passwords.html",
            context={
                "passwords": generator._generate_all_passwords(), # Content
                "random_method": generator._get_random_password_type(), # Link
            }
        )
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Something went wrong, try again later",
        )

```

This endpoint allows us to generate and retrieve all password types at [pwplz.com](http://pwplz.com).

![pwplz_all_passwords.png {780x500} {priority} {caption: All Passwords Demo (pwplz.com)}](/assets/img/blog/password-please-all-passwords.png)

##### 2. Render Single Password

Method: `GET /{slug}`

This endpoint handles requests to generate a password using a specific method, with `{slug}` acting as a placeholder for the type of password the user wants to create (e.g., `random` or `argon2`, defined by `PasswordType(Enum)`). The `render_single_password` endpoint function checks the method provided in the URL path and retrieves the corresponding password creation method from the `PasswordGenerator`. It then generates a password using this method and returns the `single_password.html` template, populated with the generated password.

```python
#-=-=-=-=-=-=-=-=-=-=-=-=>
# Method-specific route
@app.get("/{slug}", response_class=HTMLResponse)
#-=-=-=-=-=-=-=-=-=-=-=-=>

async def render_single_password(request: Request, slug: str):
    """Endpoint to render a simple HTML page with a single generated password"""
    try:
        # Validate slug in PasswordType
        password_type = PasswordType[slug.upper()]

        # Map slug to password creation method
        creator = generator._get_password_creation_method(password_type)

        # Return the template with the generated password
        return templates.TemplateResponse(
            request=request,
            name="single_password.html",
            context={
                "slug": slug,
                "password": creator(),
            },
        )
    except KeyError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Invalid password type: {slug}",
        )
```

This dynamic route generates a single password based on a specific `PasswordType`, which is defined within the URL (e.g. [pwplz.com/random](https://www.pwplz.com/random)).

![pwplz_single_passwords.png {780x200} {priority} {caption: Single Password Demo (pwplz.com/random)}](/assets/img/blog/password-please-single-password.png)

#### The Inner Workings

If, like me, your brain processes information better through the sacred language of boxes and arrows (because words are overrated), here’s a block diagram of the `pwplz` application, illustrating its elegant dance from request to response.

![pwplz_blocks.png {822x580} {priority} {caption: Block Diagram of pwplz Application}](/assets/img/blog/password-please-block-diagram.png)

This diagram highlights how `pwplz` uses environment configurations to set up the PasswordGenerator, processes requests through the FastAPI app, and handles responses and errors to ensure everything runs smoothly. On the frontend, responses are rendered in HTML templates, providing feedback to users, while backend processes manage password creation, configuration, and error control.

### Getting involved

While it’s all set for you to use without fuss, developers are welcome to dive in and contribute. If you're interested in tweaking or suggesting features, please feel free to open a pull request.

Even without a technical background, by exploring this app you’ll get a clearer picture of how password security works, and discover the fun and satisfaction of creating something through programming (and Python is a perfect starting point).

Dive in, check out the code, and see how just a little programming know-how can make a big difference.

To start contributing, check out the [GitHub repository](https://github.com/devArno88/pwplz).

### Your support

`pwplz` is an [open-source](https://opensource.com/resources/what-open-source) project, and [pwplz.com](http://pwplz.com) will remain free forever.

However, if you enjoy the apps I create, the content I share, or my Indie Hacker journey, consider [supporting my work](https://www.devarno.com/?tab=support) with a donation. Your support keeps this Indie adventure thriving.

Also, please feel free to follow me on my upcoming digital adventures so you don’t miss out on some exclusive early-bird perks.

Or just sit back and enjoy watching the coding chaos unfold from a safe distance.

### Live long and program

All jokes aside, please remember to stay safe online; protect your digital assets, and never again fall trap to the easy password syndrome.

Remember, a strong password is like a bouncer at the door of your digital life (not someone you want to skimp on).

For any collaborations, technical advice or feedback, feel free to hit me up at [devarno.com](http://devarno.com/) or [email me directly](mailto:alex@devarno.com?subject=I%20have%20an%20idea).

Cheers to surfing the web securely, and may the `{source}` be with you 🧑🏻‍💻
