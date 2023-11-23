#!/bin/bash

DB_PORT=5432
DB_HOST="localhost"
DB_USER="pguser"
DB_NAME="referral_db"
DB_PASSWORD=$(openssl rand -base64 32 | tr -d '=+/' | cut -c -32)

# Prefill postgres values to .env
cat << EOF > .env
POSTGRES_HOST="$DB_HOST"
POSTGRES_PORT=$DB_PORT
POSTGRES_USER="$DB_USER"
POSTGRES_PASSWORD="$DB_PASSWORD"
POSTGRES_NAME="$DB_NAME"
EOF

# Prefill postgres values to packages/api/.env
cat << EOF > packages/api/.env
DATABASE_URL="postgresql://$DB_USER:$DB_PASSWORD@$DB_HOST:$DB_PORT/$DB_NAME"
EOF

# Prefill postgres values to packages/prisma/.env
cat << EOF > packages/prisma/.env
DATABASE_URL="postgresql://$DB_USER:$DB_PASSWORD@$DB_HOST:$DB_PORT/$DB_NAME"
EOF

