#!/bin/sh -eu

gcloud kms encrypt --plaintext-file .env.json --ciphertext-file .env.json.enc --location global --keyring sample-keyrings --key sample-key
gcloud kms encrypt --plaintext-file keyfile.json --ciphertext-file keyfile.json.enc --location global --keyring sample-keyrings --key sample-key