FROM node:22-alpine AS base

###########################################

FROM base AS builder

RUN apk update
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Replace the version with the one specified in the project's package.json
RUN yarn global add turbo@^2.4.2

COPY . .

# Generate a partial monorepo with a pruned lockfile for a target workspace.
RUN turbo prune web --docker

###########################################

FROM base AS installer

RUN apk update
RUN apk add --no-cache libc6-compat

WORKDIR /app

# First install the dependencies (as they change less often)
COPY --from=builder /app/out/json/ .
RUN yarn install --frozen-lockfile

# Build the project
COPY --from=builder /app/out/full/ .
RUN yarn turbo run build

###########################################

FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public

CMD node apps/web/server.js
