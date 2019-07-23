/**
 * Function that swaps array index values
 *
 * @params_1: array, @params_2: removal_index, @params_3: new_index_position
 *
 *
 */

function swap_indices_val_arr(arr, removal_index, new_index_position) {
  arr.splice(new_index_position, 0, arr.splice(removal_index, 1)[0]);
}
