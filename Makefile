setup-db-password:
	@echo "Generating Postgres DB password..."
	@NEW_PASSWORD=$$(openssl rand -base64 32 | tr -d '=+/' | cut -c -32)
	@sed -i '/^POSTGRES_DB_PASSWORD/d' .env
	@echo "POSTGRES_DB_PASSWORD=$$NEW_PASSWORD" >> .env
	@sed -i '/^POSTGRES_DB_PASSWORD/d' packages/api/.env
	@echo "POSTGRES_DB_PASSWORD=$$NEW_PASSWORD" >> packages/api/.env
	@echo "Password has been generated and stored."

