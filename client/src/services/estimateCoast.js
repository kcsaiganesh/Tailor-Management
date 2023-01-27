
export function estimateCost(top, bottom, set, fabric, measurements) {
    let cost = 0;

    switch (bottom) {
        case '':
            cost = 100;
            break;
        default:
            cost = 0;
    }

    // Set base cost based on style
    switch (top) {
        case 'shirt':
            cost = 100;
            break;
        case 'dress':
            cost = 200;
            break;
        case 'suit':
            cost = 300;
            break;
        default:
            cost = 0;
    }

    // Add cost for fabric
    switch (fabric) {
        case 'cotton':
            cost += 50;
            break;
        case 'silk':
            cost += 100;
            break;
        case 'wool':
            cost += 150;
            break;
        default:
            cost = 0;
    }
    switch (set) {
        case 'formal-suit':
            cost += 300;
            break;
        default:
            cost = 0;
    }

    // Add cost for measurements
    cost += (measurements.chest * 0.1) + (measurements.waist * 0.1) + (measurements.hips * 0.1);

    return cost;
}
