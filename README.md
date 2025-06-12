# Fernetrix

A pure frontend application built with Vue.js, **Fernetrix** helps web developers and security enthusiasts generate secure **`SECRET_KEY` values for Django projects** and **Fernet keys for data encryption**. All key generation happens directly in your browser, client-side, requiring no backend dependencies whatsoever.

-----

## Features

  * **Django Secret Key Generation**: Instantly create strong, random `SECRET_KEY` values for your Django projects.
  * **Fernet Key Generation**: Produce secure Fernet keys that can be used for encrypting and decrypting sensitive data.
  * **Completely Client-Side**: All key generation processes occur within your browser, without any server interaction. This significantly enhances your privacy and security.
  * **User-Friendly Interface**: With a clean, intuitive, and modern interface developed using Vue.js, generating keys has never been easier.

You can access Fernetrix and generate your Django secret keys directly online at [Fernetrix](https://mertcan-tas.github.io/fernetrix/django-secret-key).

-----

## Setup

Getting Fernetrix running locally is straightforward. Since it's a frontend-only application, you don't need to worry about any backend or database setup.

### Prerequisites

You'll need the following installed on your machine to run this project:

  * Node.js 14+
  * npm or yarn

### Steps

1.  Clone the repository:

    ```bash
    git clone https://github.com/mertcan-tas/fernetrix.git
    cd fernetrix
    ```

2.  Install the Node.js dependencies:

    ```bash
    pnpm install
    ```

3.  Start the Vue.js development server:

    ```bash
    pnpm run dev
    ```

    The application will typically be accessible at `http://localhost:3000/`.

-----

## Usage

Once you've started the application, open your web browser and navigate to `http://localhost:3000/`. You'll see an interface with options to generate both Django and Fernet keys. Simply click the respective button to generate the key you need; the generated key will instantly appear on the screen.


## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
