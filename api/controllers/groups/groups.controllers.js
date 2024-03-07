const Group = require('../../models/groups/groups.mongo')

async function createGroup(req, res) {
    try {
        const { name, description } = req.body;
        // const creator = req.user.username;
        const creator = 'testUser'

      const newGroup = new Group({
        name: name,
        description: description,
        creator: creator,
        members: [
          {
            username: creator, 
            role: "admin"
          }
        ]
      });

      await newGroup.save();

      return res.status(201).json(newGroup);
    } catch (error) {
      console.error("Error creating group:", error);
      throw error;
    }
}
async function joinGroup(req, res) {
    try {
        const { groupId, username } = req.body;
        console.log(username)
        console.log(groupId)
        const group = await Group.findById(groupId);

        if (!group) {
            throw new Error("Group not found!");
        }

        const existingMember = group.members.find(member => member.username === username);
        if (existingMember) {
            return res.status(400).json({ error: 'User is already a member of this group' });
        }
        group.members.push({
            username: username,
            role: "member"
        });


        await group.save();

        return res.json(group.members);
    } catch (error) {
        console.error("Error joining group:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
async function listGroups(req,res) {
    try {
      const groups = await Group.find({});
  
      return res.status(200).json(groups)
    } catch (error) {
      console.error("Error listing groups:", error);
      throw error;
    }
  }


  
  
module.exports = {
    createGroup,
    joinGroup,
    listGroups
}