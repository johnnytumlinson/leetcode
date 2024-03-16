/* https://leetcode.com/problems/recyclable-and-low-fat-products/submissions/1204826563 */

select product_id
from Products p
where 1 = 1
  and p.low_fats  = 'Y'
  and p.recyclable = 'Y';
  