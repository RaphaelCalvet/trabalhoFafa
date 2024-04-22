const User = require('../models/userModel');

class UserController {
    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getUserById(req, res) {
        const { id } = req.params;
        try {
            const user = await User.findById(id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createUser(req, res) {
        const { username, password } = req.body;
        try {
            const newUser = await User.create({ username, password });
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateUser(req, res) {
        const { id } = req.params;
        const { username, password } = req.body;
        try {
            const updatedUser = await User.findByIdAndUpdate(id, { username, password }, { new: true });
            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(updatedUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    // Excluir um usuário
    async deleteUser(req, res) {
        const { id } = req.params;
        try {
            const deletedUser = await User.findByIdAndDelete(id);
            if (!deletedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new UserController;
