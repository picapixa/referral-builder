#!/bin/bash

DB_PORT=5432
DB_HOST="localhost"
DB_USER="pguser"
DB_NAME="referral_db"
DB_PASSWORD=$(openssl rand -base64 32 | tr -d '=+/' | cut -c -32)

# Prefill postgres values to .env
cat << EOF > .env
POSTGRES_DB_HOST="$DB_HOST"
POSTGRES_DB_PORT=$DB_PORT
POSTGRES_DB_USER="$DB_USER"
POSTGRES_DB_PASSWORD="$DB_PASSWORD"
POSTGRES_DB_NAME="$DB_NAME"
EOF

# Prefill postgres values to packages/api/.env
cat << EOF > packages/api/.env
DATABASE_URL="postgresql://$DB_USER:$DB_PASSWORD@$DB_HOST:$DB_PORT/$DB_NAME"
EOF


