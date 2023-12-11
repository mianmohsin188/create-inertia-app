import {usePage} from "@inertiajs/inertia-react";

const currentRoute=() => {

    const route = usePage().url

    return route
}
export default currentRoute
