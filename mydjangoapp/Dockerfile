# ==========================
# Stage 1 - Build
# ==========================
FROM python:3.12-alpine AS builder

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Install build dependencies
RUN apk add --no-cache \
    gcc \
    musl-dev \
    python3-dev \
    libffi-dev \
    postgresql-dev \
    cargo

# Create virtual environment
RUN python -m venv /opt/venv

ENV PATH="/opt/venv/bin:$PATH"

# Install Python dependencies
COPY requirements.txt .

RUN pip install --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

# ==========================
# Stage 2 - Runtime
# ==========================
FROM python:3.12-alpine

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Install runtime libraries only
RUN apk add --no-cache \
    libpq

# Copy virtual environment from builder
COPY --from=builder /opt/venv /opt/venv

ENV PATH="/opt/venv/bin:$PATH"

# Copy project files
COPY . .

EXPOSE 8000

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "mydjangoapp.wsgi:application"]