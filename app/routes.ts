import {type RouteConfig, route, layout, index} from "@react-router/dev/routes";

export default [
    route('signIn', 'routes/root/signIn.tsx'),
    route('api/create-trip', 'routes/api/create-trip.ts'),
    layout("routes/admin/admin-layout.tsx", [
        route('dashboard', 'routes/admin/dashboard.tsx'),
        route('all-users', 'routes/admin/all-users.tsx'),
        route('trips', 'routes/admin/trips.tsx'),
        route('trips/create', 'routes/admin/create-trips.tsx'),
        route('trips/:tripId', 'routes/admin/trip-detail.tsx'),
    ]),
    layout('routes/root/page-layout.tsx', [
        index('routes/root/travel-page.tsx'),
        route('/travel/:tripId', 'routes/root/travel-detail.tsx'),
        route('/travel/:tripId/payment', 'routes/root/payment.tsx'),
    ])
] satisfies RouteConfig;
